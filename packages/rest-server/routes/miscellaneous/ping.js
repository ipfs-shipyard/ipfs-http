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
  path: '/ping/{peerId}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.ping(request.params.peerId, {
        count: request.payload.count
      })
    },
    description: 'Send echo request packets to IPFS hosts',
    notes: [
      'Note that not all ping response objects are "pongs".',
      'A "pong" message can be identified by a truthy success property and an empty text property.',
      'Other ping responses are failures or status updates.'
    ],
    tags: ['api'],
    validate: {
      params: {
        peerId: Joi
          .peerId()
          .required()
      },
      payload: {
        count: Joi
          .number()
          .min(1)
          .max(50)
          .default(10)
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
            success: Joi
              .boolean(),
            time: Joi
              .number()
              .integer()
              .min(0),
            text: Joi
              .string()
          }).label('pong')).label('ping-responses')
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
