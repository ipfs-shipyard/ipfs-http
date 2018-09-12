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
  method: 'POST',
  path: '/repo/gc',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.repo.gc()
    },
    description: 'Perform a garbage collection sweep on the repo',
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
        200: Joi
          .array()
          .items(Joi.object({
            type: Joi
              .string()
              .default('all')
              .required()
              .valid([
                'recursive',
                'direct',
                'indirect'
              ]),
              hash: Joi
                .cid()
                .required()
          }).label('pin'))
      }
    },*/
    plugins: {
      'hapi-swagger': {
        id: 'repo.gc'
      }
    }
  }
}
