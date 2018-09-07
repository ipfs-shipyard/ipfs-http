'use strict'

const {
  Joi
} = require('../../utils/validation')

module.exports = {
  method: 'GET',
  path: '/config',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.config.get()
    },
    description: 'Returns the current config',
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        id: 'get'
      }
    }
  }
}
