'use strict'

const Joi = require('joi')
const CID = require('cids')
const mh = require('multihashes')
const {
  JSON,
  OCTET_STREAM,
  EVERYTHING
} = require('../../utils/mime-types')
const cidVersion = require('../../utils/validation/cid-version')
const cidBase = require('../../utils/validation/cid-base')
const transformHash = require('../../utils/transform-hash')

module.exports = {
  method: 'GET',
  path: '/bitswap/stats',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.bitswap.stat()
        .then(result => {
          return {
            blocks: {
              sent: Number(result.blocksSent),
              received: Number(result.blocksReceived),
              duplicate: Number(result.dupBlksReceived)
            },
            data: {
              sent: Number(result.dataSent),
              received: Number(result.dataReceived),
              duplicate: Number(result.dupDataReceived)
            },
            peers: result.peers.map(hash => transformHash(hash, 0, 'base58btc')),
            wantlist: result.wantlist.map(hash => transformHash(hash, request.query.cidVersion, request.query.cidBase)),
            provideBufferLength: Number(result.provideBufLen)
          }
        })
    },
    description: 'Show diagnostic information on the bitswap agent',
    tags: ['api'],
    validate: {
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
          blocks: Joi.object({
            sent: Joi
              .number()
              .integer()
              .min(0),
            received: Joi
              .number()
              .integer()
              .min(0),
            duplicate: Joi
              .number()
              .integer()
              .min(0)
          }),
          data: Joi.object({
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
            duplicate: Joi
              .number()
              .integer()
              .min(0)
              .unit('bytes')
          }),
          provideBufferLength: Joi
            .number()
            .integer()
            .min(0),
          peers: Joi
            .array()
            .items(Joi.string().label('cid')),
          wantlist: Joi
            .array()
            .items(Joi.string().label('cid'))
        }).label('bitswap-stats')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'bitswap.stats'
      }
    }
  }
}
