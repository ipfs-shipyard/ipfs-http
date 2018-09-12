'use strict'

const {
  Joi
} = require('../../utils/validation')

module.exports = {
  method: 'DELETE',
  path: '/dag/{cid}',
  options: {
    handler: (request, reply) => {},
    description: 'Remove a DAG node from your local repo',
    notes: 'This will not remove a DAG node from IPFS if other nodes have it',
    tags: ['api'],
    validate: {
      params: {
        cid: Joi
          .string()
          .required()
          .description('The CID that corresponds to the DAG node we wish to remove')
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'dag.remove'
      }
    }
  }
}
