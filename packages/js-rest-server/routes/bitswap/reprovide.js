'use strict'

const Joi = require('joi')
const CID = require('cids')
const {
  JSON,
  OCTET_STREAM,
  EVERYTHING
} = require('../../utils/mime-types')
const cidVersion = require('../../utils/validation/cid-version')
const cidBase = require('../../utils/validation/cid-base')
const transformHash = require('../../utils/transform-hash')

module.exports = {
  method: 'POST',
  path: '/bitswap/reprovide',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.bitswap.reprovide()
        .then(() => reply.response().code(204))
    },
    description: 'Trigger reprovider',
    tags: ['api'],
    validate: {
      options: {
        allowUnknown: true
      }
    },
    response: {
      status: {
        204: Joi.empty()
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'reprovide'
      }
    }
  }
}
