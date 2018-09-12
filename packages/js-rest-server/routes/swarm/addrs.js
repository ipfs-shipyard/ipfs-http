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
  path: '/swarm/connections',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.swarm.filters()
    },
    description: 'List of known addresses of each peer connected',
    tags: ['api'],
    validate: {
      headers: {
        accept: Joi
          .string()
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
    /*response: {
      status: {
        200: Joi.object({
          numObjects: Joi
            .number()
            .integer()
            .min(0),
          repoSize: Joi
            .number()
            .integer()
            .min(0),
          repoPath: Joi
            .string()
            .required(),
          version: Joi
            .number()
            .integer()
            .min(0),
          storageMax: Joi
            .number()
            .integer()
            .min(0)
        }).label('repo-stats')
      }
    },*/
    plugins: {
      'hapi-swagger': {
        id: 'swarm.addrs'
      }
    }
  }
}
