'use strict'

const {
  JSON,
  OCTET_STREAM,
  EVERYTHING,
  PEM
} = require('../../utils/mime-types')
const {
  Joi,
  stream
} = require('../../utils/validation')

module.exports = {
  method: 'POST',
  path: '/key',
  options: {
    handler: (request, reply) => {
      return null
    },
    description: 'Create a new keypair',
    tags: ['api'],
    validate: {
      payload: Joi.object({
        name: Joi.string().required(),
        pem: Joi
          .string()
          .description('base64 encoded PKCS #8 PEM file to import keypairs from'),
        password: Joi
          .string()
          .description('Password to PKCS #8 PEM file'),
      }).label('generate-keypair-payload'),
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
        id: 'generate'
      }
    }
  }
}
