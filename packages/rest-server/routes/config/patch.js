'use strict'

const {
  Joi
} = require('../../utils/validation')

module.exports = {
  method: 'PATCH',
  path: '/config',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.config.get()
        .then(config => {
          const patched = Object.assign({}, config, request.payload)

          return request.server.app.ipfs.config.replace(patched)
        })
        .then(() => request.server.app.ipfs.config.get())
    },
    description: 'Replaces part of the current config',
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
        id: 'patch'
      }
    }
  }
}
