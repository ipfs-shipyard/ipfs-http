'use strict'

const {
  Joi
} = require('../../utils/validation')

module.exports = {
  method: 'PUT',
  path: '/config',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.config.replace(request.payload)
        .then(() => request.server.app.ipfs.config.get())
    },
    description: 'Replaces the current config',
    notes: [
      'The daemon will have to be restarted manually for the changes to take effect'
    ],
    tags: ['api'],
    validate: {
      payload: Joi
          .object()
          .description('A JSON object that contains the new config')
    },
    plugins: {
      'hapi-swagger': {
        id: 'replace'
      }
    }
  }
}
