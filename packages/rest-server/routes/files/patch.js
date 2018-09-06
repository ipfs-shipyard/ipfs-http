'use strict'

const Joi = require('joi')

module.exports = {
  method: 'PATCH',
  path: '/files/{path}',
  options: {
    handler: (request, reply) => {

    },
    description: 'Update an MFS path',
    notes: 'Updates a file or directory at the passed MFS path',
    tags: ['api'],
    validate: {
      params: {
        path: Joi
          .string()
          .required()
          .description('The MFS path you wish to update')
      }
    }
  }
}
