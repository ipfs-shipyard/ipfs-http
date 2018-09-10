'use strict'

const {
  Joi,
  cidVersion
} = require('../../utils/validation')
const mh = require('multihashes')

module.exports = {
  method: 'PATCH',
  path: '/dag/{cid}',
  options: {
    handler: (request, reply) => {

    },
    description: 'Update an IPLD format node',
    notes: [
      'This will result in a new DAG node being created'
    ],
    tags: ['api'],
    validate: {
      params: {
        cid: Joi
          .cid()
          .description('The CID that corresponds to the DAG node we wish to create')
      },
      payload: Joi.object({
        data: Joi
          .string(),
        links: Joi
          .array()
          .items(Joi.object({
            name: Joi
              .string(),
            size: Joi
              .number()
              .integer()
              .min(0),
            cid: Joi
              .cid()
              .required()
          }).label('DAGLink'))
      }).label('DAGNode'),
      query: {
        format: Joi
          .string()
          .valid('dag-cbor', 'dag-pb')
          .default('dag-cbor'),
        hashAlg: Joi
          .string()
          .valid(Object.keys(mh.names))
          .default('sha2-256'),
        cidVersion: cidVersion
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'update'
      }
    }
  }
}
