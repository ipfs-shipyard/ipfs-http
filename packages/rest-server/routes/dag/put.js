'use strict'

const Joi = require('joi')

module.exports = {
  method: 'PUT',
  path: '/dag/{cid}',
  options: {
    handler: (request, reply) => {},
    description: 'Create a DAG node',
    notes: 'Resolves a DAG node with the passed CID',
    tags: ['api'],
    validate: {
      params: {
        cid: Joi
          .string()
          .required()
          .description('The CID that corresponds to the DAG node we wish to create')
      }
    }
  }
}
