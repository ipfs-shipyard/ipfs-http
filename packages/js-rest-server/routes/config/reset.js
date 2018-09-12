'use strict'

const {
  Joi
} = require('../../utils/validation')

module.exports = {
  method: 'DELETE',
  path: '/config',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.config.replace(null)
        .then(() => request.server.app.ipfs.config.get())
    },
    description: 'Resets the current config to default values',
    notes: [
      'The daemon will have to be restarted manually for the changes to take effect'
    ],
    tags: ['api'],
    plugins: {
      'hapi-swagger': {
        id: 'reset'
      }
    }
  }
}
