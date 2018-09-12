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
  path: '/dht/peer/{peerId}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.dht.findpeer(request.params.peerId)
    },
    description: 'Retrieve the Peer Info of a reachable node in the network',
    tags: ['api'],
    validate: {
      params: {
        peerId: Joi
          .peerId()
          .description('The Peer ID that we wish to find info about')
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
        id: 'dht.findPeer'
      }
    }
  }
}
