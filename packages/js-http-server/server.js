'use strict'

const Glue = require('@hapi/glue')
const manifest = {
  server: {
    host: 'localhost',
    port: process.env.PORT,
    debug: { request: ['error'] }
  },
  register: {
    plugins: [
      require('ipfs-rest-server'),
      require('ipfs-graphql-server')
    ],
    options: {
      once: true
    }
  }
}

const options = {
  relativeTo: __dirname
}

module.exports = async () => {
  return await Glue.compose(manifest, options)
}
