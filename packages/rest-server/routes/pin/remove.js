'use strict'

const {
  JSON,
  OCTET_STREAM,
  EVERYTHING
} = require('../../utils/mime-types')
const {
  Joi
} = require('../../utils/validation')

module.exports = {
  method: 'DELETE',
  path: '/pins/{hash}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.pin.rm(request.params.hash, {
        recursive: request.query.recursive
      })
        .then(() => reply.response().code(204))
    },
    description: 'Remove a hash from the pinset',
    tags: ['api'],
    validate: {
      params: {
        hash: Joi
          .cid()
          .required()
      },
      query: {
        recursive: Joi
          .boolean()
          .default(true)
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
    plugins: {
      'hapi-swagger': {
        id: 'remove',
        responses: {
          204: {
            description: 'The pin was removed'
          },
          404: {
            description: 'The pin could not be found'
          }
        }
      }
    }
  }
}
