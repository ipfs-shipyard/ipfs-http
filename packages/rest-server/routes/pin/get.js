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
  path: '/pins/{hash}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.pin.ls(request.params.hash)
        .then(pinset => pinset.pop())
    },
    description: 'List the objects pinned under a specific hash',
    tags: ['api'],
    validate: {
      params: {
        hash: Joi
          .cid()
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
        200: Joi.object({
          hash: Joi
            .cid(),
          type: Joi
            .string()
        }).label('pin')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'get',
        responses: {
          404: {
            description: 'The pin could not be found'
          }
        }
      }
    }
  }
}
