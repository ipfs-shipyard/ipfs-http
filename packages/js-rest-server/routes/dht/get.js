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
  path: '/dht/{key}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.dht.get(request.params.cid)
    },
    description: 'Retrieve a value from the DHT',
    tags: ['api'],
    validate: {
      params: {
        key: Joi
          .string()
          .description('The key to retrieve the associated value for')
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
        id: 'get'
      }
    }
  }
}
