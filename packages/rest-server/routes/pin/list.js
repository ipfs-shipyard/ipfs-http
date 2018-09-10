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
  path: '/pins',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.pin.ls({
        type: request.query.type
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
          ])
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
            type: Joi
              .string()
              .default('all')
              .required()
              .valid([
                'recursive',
                'direct',
                'indirect'
              ]),
              hash: Joi
                .cid()
                .required()
          }).label('pin'))
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'list',
        responses: {
          404: {
            description: 'The DNS name could not be resolved'
          }
        }
      }
    }
  }
}
