'use strict'

const {
  JSON,
  OCTET_STREAM,
  EVERYTHING
} = require('../../utils/mime-types')
const {
  Joi,
  cidBase,
  cidVersion
} = require('../../utils/validation')
const transformHash = require('../../utils/transform-hash')

module.exports = {
  method: 'GET',
  path: '/pins',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.pin.ls(request.query.cid, {
        type: request.query.type
      })
        .then(pinset => {
          return pinset.map(pin => {
            return {
              cid: transformHash(pin.hash, request.query.cidVersion, request.query.cidBase),
              type: pin.type
            }
          })
        })
    },
    description: 'List all the objects pinned to local storage',
    tags: ['api'],
    validate: {
      query: {
        type: Joi
          .string()
          .default('all')
          .valid([
            'recursive',
            'direct',
            'indirect'
          ]),
        cid: Joi
          .cid(),
        cidBase,
        cidVersion
      },
      headers: {
        accept: Joi
          .string()
          .default(JSON)
          .valid([
            JSON,
            EVERYTHING
          ])
      },
      options: {
        allowUnknown: true
      }
    },
    response: {
      status: {
        200: Joi
          .array()
          .items(Joi.object({
            cid: Joi
              .cid()
              .required(),
            type: Joi
              .string()
              .default('all')
              .required()
              .valid([
                'recursive',
                'direct',
                'indirect'
              ])
          })
            .label('pin')
          ).label('pins')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'pin.list',
        responses: {
          404: {
            description: 'The DNS name could not be resolved'
          }
        }
      }
    }
  }
}
