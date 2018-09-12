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
  path: '/pins/{cid}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.pin.ls(request.params.hash)
    },
    description: 'List the objects pinned under a specific cid',
    tags: ['api'],
    validate: {
      params: {
        cid: Joi
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
            .cid()
            .required(),
          type: Joi
            .string()
            .required()
        }).label('pin')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'pin.get',
        responses: {
          404: {
            description: 'The pin could not be found'
          }
        }
      }
    }
  }
}
