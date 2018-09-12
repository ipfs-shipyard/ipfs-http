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
  path: '/dht/{key}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.dht.put(request.params.key, request.payload)
    },
    description: 'Store a value on the DHT',
    tags: ['api'],
    validate: {
      payload: Joi.object({
        value: Joi
          .string()
          .required()
      }).label('dht-value'),
      params: {
        key: Joi
          .cid()
          .required()
          .description('The content id you are storing')
      },
      headers: {
        accept: Joi.string()
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
        id: 'dht.put'
      }
    }
  }
}
