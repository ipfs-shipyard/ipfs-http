'use strict'

const Joi = require('joi')
const Boom = require('boom')
const CID = require('cids')
const {
  JSON,
  OCTET_STREAM
} = require('../../utils/mime-types')
const cidVersion = require('../../utils/validation/cid-version')
const cidBase = require('../../utils/validation/cid-base')
const transformHash = require('../../utils/transform-hash')
const TYPES = [
  'file',
  'directory'
]

module.exports = {
  method: 'GET',
  path: '/files/{path}',
  options: {
    handler: (request, reply) => {
      let promise

      if (request.headers.accept === JSON) {
        promise = request.server.app.ipfs.files.stat(request.params.path)
          .then(result => {
            result.cid = transformHash(result.hash, request.query.cidVersion, request.query.cidBase)
            delete result.hash

            if (result.type === 'directory') {
              return request.server.app.ipfs.files.ls(request.params.path, {
                long: true
              })
                .then(contents => {
                  result.contents = contents.map(entry => {
                    entry.type = TYPES[entry.type]

                    if (entry.type === 'directory') {
                      delete entry.size
                    }

                    entry.cid = transformHash(entry.hash, request.query.cidVersion, request.query.cidBase)
                    delete entry.hash

                    return entry
                  })

                  return result
                })
            }

            return result
          })
      } else {
        promise = request.server.app.ipfs.files.read(request.params.path, {
          offset: request.query.offset,
          length: request.query.length
        })
      }

      return promise
        .catch(error => {
          if (error.message.includes('does not exist')) {
            throw Boom.notFound()
          } else if (error.message.includes('paths must start with a leading /')) {
            throw Boom.badRequest(error.message)
          } else if (error.message.includes('was not a file')) {
            throw Boom.badRequest(error.message)
          }

          throw Boom.badImplementation(error)
        })
    },
    description: 'Get a file or directory from your MFS',
    notes: [
      'Returns a file or directory from your MFS',
      'Specify `accept: application/json` for file/directory metadata or `accept: application/octet-stream` to download file data.',
      'If the path resolves to a file and `accept: application/octet-stream` has been specified, you may pass the `offset` and `length` parameters.'
    ],
    tags: ['api'],
    validate: {
      params: {
        path: Joi
          .string()
          .required()
          .regex(/^\//)
          .description('The MFS path you wish to retrieve')
          .default('/')
      },
      query: {
        offset: Joi
          .description('Return file data starting at this offset')
          .when('$headers.accept', {
            is: OCTET_STREAM,
            then: Joi
              .number()
              .integer()
              .positive()
              .unit('bytes'),
            otherwise: Joi.forbidden()
          }),
        length: Joi
          .description('Return only this many bytes of file data')
          .when('$headers.accept', {
            is: OCTET_STREAM,
            then: Joi
              .number()
              .integer()
              .positive()
              .unit('bytes'),
            otherwise: Joi.forbidden()
          }),
        cidBase,
        cidVersion
      },
      headers: {
        accept: Joi.string()
          .default(JSON)
          .valid([
            JSON,
            OCTET_STREAM
          ])
      },
      options: {
        allowUnknown: true
      }
    },
    response: {
      status: {
        200: Joi.object({
          cid: Joi
            .string()
            .required(),
          type: Joi
            .string()
            .required()
            .valid(['file', 'directory']),
          cumulativeSize: Joi
            .number()
            .integer()
            .positive()
            .required(),
          blocks: Joi
            .number()
            .integer()
            .required(),
          size: Joi
            .number()
            .integer(),
          withLocality: Joi
            .boolean(),
          local: Joi
            .boolean(),
          sizeLocal: Joi
            .number()
            .integer(),
          contents: Joi
            .array()
            .notes(['note1', 'note2'])
            .description('a descripiton')
            .items(Joi.object({
              name: Joi
                .string()
                .required(),
              type: Joi
                .string()
                .required()
                .valid(['file', 'directory']),
              cid: Joi.string().required(),
              size: Joi.number().integer()
            }).label('unixfs-entry-summary')
          )
        }).label('unixfs-entry'),
        //202: Joi.object({ original: {}, updated:  {} })
      }
    }
  }
}
