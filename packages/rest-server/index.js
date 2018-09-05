'use strict'

const pkg = require('./package.json')
const HapiSwagger = require('hapi-swagger')
const routes = require('./routes')
const IPFS = require('ipfs')
const remote = require('ipfs-api')
const Inert = require('inert')
const Vision = require('vision')
const log = require('debug')('ipfs:http:server')

const getIpfs = async (options) => {
  if (options.ipfs) {
    log('Using pre-configured IPFS instance')
    return options.ipfs
  }

  if (options.host && options.port) {
    log(`Connecting to remote IPFS at ${options.host}:${options.port}`)
    return remote(options.host, options.port)
  }

  return new Promise((resolve, reject) => {
    log(`Starting an IPFS instance`)

    const ipfs = new IPFS()
    ipfs.once('ready', () => resolve(ipfs))
    ipfs.once('error', (error) => reject(error))
  })
}

module.exports = {
  register: async (server, options) => {
    server.app.ipfs = await getIpfs(options)

    await server.register([
      Inert,
      Vision, {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'IPFS API Documentation',
          version: pkg.version
        },
        definitionPrefix: 'useLabel'
      }
    }])

    server.route(routes)
  },
  version: pkg.version,
  name: pkg.name
}
