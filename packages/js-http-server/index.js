'use strict'

process.on('unhandledRejection', (error) => {
  throw error
})

const createServer = require('./server')

const startServer = async function () {
  try {
    const server = await createServer()
    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

startServer()
