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
  path: '/name/{name}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.name.resolve(request.params.name, {
        recursive: request.query.recursive,
        nocache: request.query.nocache
      })
    },
    description: 'Resolve an IPNS name',
    tags: ['api'],
    validate: {
      params: {
        name: Joi
          .string()
          .required()
      },
      query: {
        recursive: Joi
          .boolean()
          .default(false),
        nocache: Joi
          .boolean()
          .default(false)
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
        id: 'name.resolve',
        responses: {
          404: {
            description: 'The IPNS name could not be resolved'
          }
        }
      }
    }
  }
}
