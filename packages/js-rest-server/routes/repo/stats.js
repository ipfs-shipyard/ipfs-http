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
  path: '/repo',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.repo.stat()
        .then((stats) => {
          return {
            numObjects: Number(stats.numObjects),
            repoSize: Number(stats.repoSize),
            repoPath: stats.repoPath,
            version: Number(stats.version),
            storageMax: Number(stats.storageMax)
          }
        })
    },
    description: 'Get stats for the currently used repo',
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
    response: {
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
    },
    plugins: {
      'hapi-swagger': {
        id: 'repo.stats'
      }
    }
  }
}
