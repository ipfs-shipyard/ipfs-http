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
  path: '/bitswap/ledger/{peerId}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.bitswap.ledger(request.params.peerId)
    },
    description: 'Show the current ledger for a peer',
    tags: ['api'],
    validate: {
      params: {
        peerId: Joi
          .peerId()
          .required()
      },
      query: {
        cidBase,
        cidVersion
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
    response: {
      status: {
        200: Joi.object({
          peer: Joi.string(),
          debtRatio: Joi.number(),
          sent: Joi
            .number()
            .integer()
            .min(0)
            .unit('bytes'),
          received: Joi
            .number()
            .integer()
            .min(0)
            .unit('bytes'),
          exchanges: Joi
            .number()
            .integer()
            .min(0)
        }).label('bitswap-ledger')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'bitswap.ledger',
        responses: {
          404: {
            description: 'The peer id was not found'
          }
        }
      }
    }
  }
}
