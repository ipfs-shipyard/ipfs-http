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
  path: '/dht/provide',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.dht.provide(request.payload)
        .then(() => reply.response().code(204))
    },
    description: 'Announce to the network that you are providing given value',
    tags: ['api'],
    validate: {
      payload: Joi
        .array()
        .description('The content IDs you are announcing')
        .items(Joi.cid())
        .label('cids'),
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
        id: 'provide'
      }
    }
  }
}
