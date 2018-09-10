'use strict'

const {
  Joi,
  cidVersion
} = require('../../utils/validation')
const mh = require('multihashes')

module.exports = {
  method: 'POST',
  path: '/files/{path}',
  options: {
    handler: (request, reply) => {
      if (request.body) {
        return request.server.app.ipfs.files.write(request.params.path, {

        })
      } else {
        return request.server.app.ipfs.files.mkdir(request.params.path, {

        })
      }
    },
    description: 'Create an MFS path',
    notes: 'Create a new file or directory at the passed MFS path',
    tags: ['api'],
    validate: {
      params: {
        path: Joi
          .string()
          .required()
          .description('The MFS path you wish to create')
      },
      query: {
        parents: Joi
          .boolean()
          .default(false)
          .describe('Make parent directories as needed'),
        cidVersion: cidVersion,
        hash: Joi
          .string()
          .valid(Object.keys(mh.names))
          .default('sha2-256')
          .describe('Hash function to use. Will set CID version to 1 if used.'),
        flush: Joi
          .boolean()
          .default(true)
          .describe('Flush the changes to disk immediately')
      }
    }
  }
}
