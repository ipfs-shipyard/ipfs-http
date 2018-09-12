'use strict'

const CID = require('cids')

module.exports = (hash, version = 1, base = 'base32') => {
  let cid = new CID(hash)

  if (version > 0) {
    cid = cid.toV1()
  }

  return cid.toBaseEncodedString(base)
}
