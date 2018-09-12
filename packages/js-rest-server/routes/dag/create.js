'use strict'

const {
  Joi,
  cidVersion
} = require('../../utils/validation')
const mh = require('multihashes')

module.exports = {
  method: 'POST',
  path: '/dag',
  options: {
    handler: (request, reply) => {

    },
    description: 'Store an IPLD format node',
    notes: [
      'The dag API supports the creation and manipulation of dag-pb object, as well as other IPLD formats (i.e dag-cbor, ethereum-block, git, etc)'
    ],
    tags: ['api'],
    validate: {
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
        id: 'dag.create'
      }
    }
  }
}
