'use strict'

const {
  JSON,
  OCTET_STREAM,
  EVERYTHING
} = require('../../utils/mime-types')
const {
  Joi,
  cidVersion,
  cidBase
} = require('../../utils/validation')
const transformHash = require('../../utils/transform-hash')

module.exports = {
  method: 'GET',
  path: '/bitswap/wantlist',
  options: {
    handler: (request, reply) => {
      console.info('request.query.peerId', request.query.peerId)
      return request.server.app.ipfs.bitswap.wantlist(request.query.peerId)
        .then(wantlist => {
          console.info(wantlist)
          if (wantlist && wantlist.Keys) {
            return wantlist.Keys.map(hash => transformHash(hash, request.query.cidVersion, request.query.cidBase))
          }

          return []
        })
    },
    description: 'Show blocks currently on the wantlist',
    tags: ['api'],
    validate: {
      query: {
        cidBase,
        cidVersion,
        peerId: Joi
          .peerId()
          .description('Filter the wantlist by this peer ID')
      },
      headers: {
        accept: Joi.string()
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
          .items(Joi.string().label('cid'))
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'wantlist'
      }
    }
  }
}
