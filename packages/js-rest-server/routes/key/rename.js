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
  method: 'PATCH',
  path: '/key/{name}',
  options: {
    handler: (request, reply) => {
      return null
    },
    description: 'Rename a keypair',
    tags: ['api'],
    validate: {
      params: {
        name: Joi.string().required()
      },
      payload: Joi.object({
        name: Joi.string().required()
      }).label('rename-keypair-payload'),
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
        id: 'rename'
      }
    }
  }
}
