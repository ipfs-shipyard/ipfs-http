'use strict'

const {
  JSON,
  OCTET_STREAM,
  EVERYTHING
} = require('../../utils/mime-types')
const {
  Joi
} = require('../../utils/validation')

module.exports = {
  method: 'GET',
  path: '/dht/providers/{cid}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.dht.findprovs(request.params.cid, {
        timeout: request.query.timeout
      })
    },
    description: 'Retrieve the providers for content that is addressed by an hash',
    tags: ['api'],
    validate: {
      params: {
        cid: Joi
          .cid()
          .description('The content id that we wish to find providers for')
      },
      query: {
        timeout: Joi
          .number()
          .integer()
          .min(0)
      },
      headers: {
        accept: Joi.string()
          .default(JSON)
          .valid([
            JSON,
            EVERYTHING
          ])
      },
      options: {
        allowUnknown: true
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'findProviders',
        responses: {
          404: {
            description: 'No provider could be found for the passed CID'
          }
        }
      }
    }
  }
}
