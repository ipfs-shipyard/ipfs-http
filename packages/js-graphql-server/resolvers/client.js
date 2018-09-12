'use strict'

const SwaggerClient = require('swagger-client')

let client

module.exports = () => {
  if (!client) {
    client = new SwaggerClient(`http://localhost:${process.env.PORT}/swagger.json`)
  }

  return client
}
