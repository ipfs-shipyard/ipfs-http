'use strict'

const Joi = require('joi')

module.exports = {
  method: 'DELETE',
  path: '/dag/{cid}',
  options: {
    handler: (request, reply) => {},
    description: 'Remove a DAG node from your local repo',
    notes: 'Removes a DAG node from your local repo',
    tags: ['api'],
    validate: {
      params: {
        cid: Joi
          .string()
          .required()
          .description('The CID that corresponds to the DAG node we wish to retrieve')
      }
    }
  }
}
