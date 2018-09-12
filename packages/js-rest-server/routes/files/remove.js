'use strict'

const Joi = require('joi')

module.exports = {
  method: 'DELETE',
  path: '/files/{path}',
  options: {
    handler: (request, reply) => {
      return request.server.app.ipfs.files.rm(request.params.path, {
        recursive: request.query.recursive
      })
        .then(() => {
          return reply.response().code(204)
        })
        .catch(error => {
          if (error.message === 'Cannot delete root') {
            return reply.response().code(409)
          }

          if (error.message === 'file does not exist') {
            return reply.response().code(404)
          }

          if (error.message.includes('is a directory')) {
            return reply.response().code(409)
          }

          throw error
        })
    },
    description: 'Remove an MFS path',
    notes: 'Removes a directory or file from your MFS',
    tags: ['api'],
    validate: {
      params: {
        path: Joi
          .string()
          .required()
          .description('The MFS path you wish to remove')
      },
      query: {
        recursive: Joi
          .boolean()
          .default(false)
          .description('Remove directories recursively')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'files.remove',
        responses: {
          204: {
            description: 'The file or directory was deleted'
          },
          404: {
            description: 'The file or directory did not exist'
          },
          409: {
            description: 'The file or directory could not be deleted'
          }
        }
      }
    }
  }
}
