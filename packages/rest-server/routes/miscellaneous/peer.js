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
  path: '/peer',
  options: {
    handler: (request, reply) => {
      return Promise.all([
        request.server.app.ipfs.id(),
        request.server.app.ipfs.version()
      ]).then(([id, version]) => {
        id.version = version
        return {
          id: id.id,
          publicKey: id.publicKey,
          addresses: id.addresses,
          agentVersion: id.agentVersion,
          protocolVersion: id.protocolVersion,
          repoVersion: version.repo
        }
      })
    },
    description: 'Returns information about this peer',
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
    response: {
      status: {
        200: Joi.object({
          id: Joi
            .peerId()
            .required(),
          publicKey: Joi
            .string()
            .required(),
          addresses: Joi
            .array()
            .required()
            .items(Joi.multiaddr()),
          agentVersion: Joi
            .string()
            .required(),
          protocolVersion: Joi
            .string()
            .required(),
          repoVersion: Joi.number()
        }).label('peer')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'info'
      }
    }
  }
}
