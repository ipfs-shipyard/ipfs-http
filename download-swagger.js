'use strict'

const fs = require('fs')

process.on('unhandledRejection', (error) => {
  throw error
})

if (process.argv.length !== 3) {
  console.error('Please specify a path to write to!')
  process.exit(1)
}

const outputFile = process.argv[2]
const createServer = require('./packages/js-http-server/server')

const downloadSwaggerJson = async function () {
  const server = await createServer()
  const response = await server.inject({ method: 'GET', url: '/swagger.json' })

  fs.writeFileSync(outputFile, JSON.stringify(response.result, null, 2))

  process.exit(0)
}

downloadSwaggerJson()
