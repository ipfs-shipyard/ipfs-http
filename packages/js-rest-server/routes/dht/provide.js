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
      return request.server.app.ipfs.dht.provide(request.payload, {
        recursive: request.query.recursive
      })
        .then(() => reply.response().code(204))
    },
    description: 'Announce to the network that you are providing given values',
    tags: ['api'],
    validate: {
      payload: Joi
        .array()
        .description('The content IDs you are announcing')
        .items(Joi
            .cid()
            .label('cid')
        )
        .label('cid-list'),
      query: {
        recursive: Joi
          .boolean()
          .default(false)
          .description('Recursively provide the entire graph')
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
        id: 'dht.provide',
        consumes: ['application/json']
      }
    }
  }
}
