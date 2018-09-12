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
  method: 'GET',
  path: '/dns/{path}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.dns(request.params.path)
        .catch(error => {
          if (
            error.code === 'ENOTFOUND' ||
            error.code === 'ENODATA' ||
            error.message.includes('domain does not have a txt dnslink entry')
          ) {
            return reply.response().code(404)
          }

          throw error
        })
    },
    description: 'Resolve DNS links',
    tags: ['api'],
    validate: {
      params: {
        path: Joi
          .string()
          .required()
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
        200: Joi.string()
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'dns',
        responses: {
          404: {
            description: 'The DNS name could not be resolved'
          }
        }
      }
    }
  }
}
