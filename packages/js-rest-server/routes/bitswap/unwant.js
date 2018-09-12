'use strict'

const CID = require('cids')
const {
  Joi,
  cidVersion,
  cidBase
} = require('../../utils/validation')
const {
  JSON,
  OCTET_STREAM,
  EVERYTHING
} = require('../../utils/mime-types')
const transformHash = require('../../utils/transform-hash')

module.exports = {
  method: 'DELETE',
  path: '/bitswap/wantlist/{cid}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.bitswap.unwant(request.params.cid)
        .then(() => reply.response().code(204))
    },
    description: 'Remove a given block from your wantlist',
    tags: ['api'],
    validate: {
      params: {
        cid: Joi
          .cid()
          .required()
          .description('The CID to remove from the wantlist')
      },
      options: {
        allowUnknown: true
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'bitswap.unwant',
        responses: {
          204: {
            description: 'The block was removed from your wantlist'
          },
          404: {
            description: 'The block was not in your wantlist'
          }
        }
      }
    }
  }
}
