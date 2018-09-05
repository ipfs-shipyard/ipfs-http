'use strict'

process.on('unhandledRejection', (error) => {
  throw error
})

const Glue = require('glue')

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

const startServer = async function () {
  try {
    const server = await Glue.compose(manifest, options)
    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()
