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
  path: '/dht/query/{peerId}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.dht.query(request.params.peerId)
    },
    description: 'Queries the network for the \'closest peers\' to a given key',
    notes: [
      '\'closest\' is defined by the rules of the underlying Peer Routing mechanism'
    ],
    tags: ['api'],
    validate: {
      params: {
        peerId: Joi
          .peerId()
          .description('An IPFS/libp2p peer ID')
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
        id: 'query'
      }
    }
  }
}
