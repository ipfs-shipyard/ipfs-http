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
  path: '/pubsub/topics',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.pubsub.subscribe(request.payload.topic, (message) => {
        
      }, {
        discover: request.payload.discover
      }, (error) => {
        if (error) {
          reply.reponse(error)
        }
      })
    },
    description: 'Returns the list of topics the peer is subscribed to',
    tags: ['api'],
    validate: {
      payload: {
        topic: Joi
          .string()
          .required(),
        discover: Joi
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
    plugins: {
      'hapi-swagger': {
        id: 'subscribe'
      }
    }
  }
}
