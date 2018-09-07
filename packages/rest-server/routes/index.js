'use strict'

const routes = []
  .concat(require('./bitswap'))
  .concat(require('./config'))
  .concat(require('./dag'))
  .concat(require('./dht'))
  .concat(require('./files'))
  .concat(require('./key'))

module.exports = routes
