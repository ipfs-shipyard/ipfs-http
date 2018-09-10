'use strict'

const routes = []
  .concat(require('./bitswap'))
  .concat(require('./config'))
  .concat(require('./dag'))
  .concat(require('./dht'))
  .concat(require('./files'))
  .concat(require('./ipns'))
  .concat(require('./key'))
  .concat(require('./miscellaneous'))
  .concat(require('./pin'))
  .concat(require('./pubsub'))

module.exports = routes
