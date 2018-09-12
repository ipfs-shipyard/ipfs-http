'use strict'

const SwaggerClient = require('swagger-client')

module.exports = (url) => {
  return new SwaggerClient(url)
}
