'use strict'

const routes = []
  .concat(require('./dag'))
  .concat(require('./files'))

module.exports = routes
