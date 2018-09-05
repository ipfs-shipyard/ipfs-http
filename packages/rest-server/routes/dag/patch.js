'use strict'

const Joi = require('joi')

module.exports = {
  method: 'PATCH',
  path: '/dag/{cid}',
  config: {
    handler: (request, reply) => {},
    description: 'Update a DAG node',
    notes: 'Updates a DAG node with the passed CID',
    tags: ['api'],
    validate: {
      params: {
        cid: Joi
          .string()
          .required()
          .description('The CID that corresponds to the DAG node we wish to update')
      }
    }
  }
}
