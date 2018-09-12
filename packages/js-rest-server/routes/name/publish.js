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
  path: '/name',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.name.publish(request.payload.value, {
        resolve: request.payload.recursive,
        lifetime: request.payload.lifetime,
        ttl: request.payload.ttl,
        key: request.payload.key,
      })
    },
    description: 'Publish an IPNS name with a given value',
    tags: ['api'],
    validate: {
      payload: Joi.object({
        value: Joi
          .string()
          .required(),
        resolve: Joi
          .boolean()
          .default(false)
          .description('Resolve given path before publishing'),
        lifetime: Joi
          .string()
          .default('24h')
          .description('Time duration of the record'),
        ttl: Joi
          .string()
          .default('24h')
          .description('Time duration this record should be cached'),
        key: Joi
          .string()
          .default('self')
          .description('Name of the key to be used or Peer ID')
      }).label('ipns-options'),
      headers: {
        accept: Joi
          .string()
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
    response: {
      status: {
        200: Joi.object({
          name: Joi.string(),
          value: Joi.string()
        }).label('ipns-record')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'name.publish'
      }
    }
  }
}
