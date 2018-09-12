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
  path: '/key',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.key.list()
    },
    description: 'List all local keypairs',
    tags: ['api'],
    validate: {
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
        id: 'list'
      }
    }
  }
}
