'use strict'

const Joi = require('joi')

module.exports = {
  method: 'DELETE',
  path: '/files/{path}',
  config: {
    handler: (request, reply) => {
      
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
    }
  }
}
