'use strict'

const routes = []
  .concat(require('./bitswap'))
  .concat(require('./config'))
  .concat(require('./dag'))
  .concat(require('./dht'))
  .concat(require('./files'))
  .concat(require('./key'))
  .concat(require('./miscellaneous'))
  .concat(require('./name'))
  .concat(require('./pin'))
  .concat(require('./pubsub'))
  .concat(require('./repo'))
  .concat(require('./swarm'))

module.exports = routes
