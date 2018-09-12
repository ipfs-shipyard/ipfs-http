'use strict'

const {
  Joi,
  cidVersion,
  cidBase
} = require('../../utils/validation')
const mh = require('multihashes')

module.exports = {
  method: 'PUT',
  path: '/files/{path}',
  options: {
    handler: (request, reply) => {
      if (request.payload && request.payload.file) {
        return request.server.app.ipfs.files.write(request.params.path, request.payload.file, {
          create: false,
          truncate: true,
          parents: request.query.parents,
          rawLeaves: request.query.rawLeaves,
          flush: request.query.flush,
          cidVersion: request.query.cidVersion,
          hashAlg: request.query.hashAlg
        })
          .then(() => {
            return reply.response().code(204)
          })
          .catch((error) => {
            if (error.message === 'file already exists') {
              return reply.response().code(409)
            }

            if (error.message === 'file does not exist') {
              return reply.response().code(409)
            }

            throw error
          })
      } else {
        return request.server.app.ipfs.files.mkdir(request.params.path, {
          parents: request.query.parents,
          cidVersion: request.query.cidVersion,
          hashAlg: request.query.hashAlg
        })
          .then(() => {
            return reply.response().code(204)
          })
          .catch((error) => {
            if (error.message === 'file already exists') {
              return reply.response().code(409)
            }

            throw error
          })
      }
    },
    description: 'Update an MFS path',
    notes: 'Updates a file or directory at the passed MFS path',
    tags: ['api'],
    payload: {
      output: 'stream',
      parse: true,
      allow: ['multipart/form-data', 'application/octet-stream']
    },
    validate: {
      payload: {
        file: Joi.any()
          .meta({
            swaggerType: 'file'
          })
          .description('The file you wish to write')
      },
      params: {
        path: Joi
          .string()
          .required()
          .description('The MFS path you wish to update')
      },
      query: {
        parents: Joi
          .boolean()
          .default(false)
          .description('Make parent directories as needed'),
        rawLeaves: Joi
          .boolean()
          .default(false)
          .description('Use raw blocks for newly created leaf nodes'),
        hashAlg: Joi
          .string()
          .valid(Object.keys(mh.names))
          .default('sha2-256'),
        cidVersion: Joi
          .number()
          .integer()
          .positive()
          .valid([0, 1])
          .default(1)
          .description('Which CID version to use'),
        flush: Joi
          .boolean()
          .default(true)
          .description('Flush the changes to disk immediately')
      }
    },
    plugins: {
      'hapi-swagger': {
        payloadType: 'form',
        produces: ['application/json'],
        consumes: ['application/octet-stream', 'multipart/form-data'],
        responses: {
          204: {
            description: 'The file or directory was created'
          },
          409: {
            description: 'The file or directory already exists'
          }
        }
      }
    }
  }
}
