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
  path: '/swarm/peers',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.swarm.peers({
        verbose: true
      })
        .then(peers => {
          return peers.map(peer => {
            const json = peer.peer.toJSON()

            return {
              id: json.id,
              address: peer.addr.toString('utf8'),
              publicKey: json.pubKey,
              latency: peer.latency
            }
          })
        })
    },
    description: 'List out the peers that we have connections with',
    tags: ['api'],
    validate: {
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
        200: Joi
          .array()
          .items(Joi.object({
            id: Joi
              .peerId()
              .required(),
            address: Joi
              .multiaddr()
              .required(),
            publicKey: Joi
              .string(),
            latency: Joi
              .any()
          }).label('remote-peer')).label('remote-peers')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'addrs'
      }
    }
  }
}
