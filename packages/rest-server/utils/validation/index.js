'use strict'

const CID = require('cids')
const PeerId = require('peer-id')
const cidBase = require('./cid-base')
const cidVersion = require('./cid-version')

const Joi = require('joi')
  .extend((joi) => ({
    name: 'cid',
    base: joi.object(),
    language: {
      invalidCid: 'Invalid CID'
    },
    coerce: (value, state, options) => {
      try {
        return new CID(value)
      } catch (error) {
        this.createError('cid.invalidCid', { v: value }, state, options)
      }
    }
  }))
  .extend((joi) => ({
    name: 'peerId',
    base: joi.string(),
    language: {
      invalidPeerId: 'Invalid Peer ID'
    },
    coerce: (value, state, options) => {
      try {
        value = value.toString()
        PeerId.createFromB58String(value)

        return value
      } catch (error) {
        this.createError('peerId.invalid', { v: value }, state, options)
      }
    }
  }))

module.exports = {
  Joi,
  cidBase,
  cidVersion
}
