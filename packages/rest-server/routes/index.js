'use strict'

const routes = []
  .concat(require('./dag'))
  .concat(require('./files'))
  .concat(require('./bitswap'))

module.exports = routes
