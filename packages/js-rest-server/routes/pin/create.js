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
  method: 'POST',
  path: '/pins',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.pin.add(request.payload.hash, {
        recursive: request.query.recursive
      })
        .then(() => reply.response().code(204))
    },
    description: 'Remove a hash from the pinset',
    tags: ['api'],
    validate: {
      payload: Joi.object({
        hash: Joi
          .cid()
          .required()
      }).label('create-pin-payload'),
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
        id: 'add',
        responses: {
          404: {
            description: 'The pin could not be found'
          }
        }
      }
    }
  }
}
