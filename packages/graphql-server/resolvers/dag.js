'use strict'

const client = require('./client')

module.exports = {
  Query: {
    dagGet: async (root, { cid, cidBase = 'base58btc', cidVersion = 0 }) => {
      const ipfs = await client()

      return ipfs
        .apis
        .dag
        .getDagCid({
          cid: cid,
          cidBase,
          cidVersion,
          headers: {
            accept: 'application/json'
          }
        })
        .then(result => result.obj)
    }
  },

  Mutation: {
    dagCreate: (root, { data }) => {

    }
  }
}
