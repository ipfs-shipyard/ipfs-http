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
  method: 'DELETE',
  path: '/swarm/connections/{address}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.swarm.filters()
    },
    description: 'Close a connection to a given address',
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
        id: 'addrs'
      }
    }
  }
}
