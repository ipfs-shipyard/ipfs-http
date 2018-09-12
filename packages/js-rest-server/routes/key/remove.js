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
  method: 'DELETE',
  path: '/key/{name}',
  options: {
    handler: (request, reply) => {
      return null
    },
    description: 'Remove a keypair',
    tags: ['api'],
    validate: {
      params: {
        name: Joi.string().required()
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
        id: 'key.remove'
      }
    }
  }
}
