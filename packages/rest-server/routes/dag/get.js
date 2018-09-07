'use strict'

const {
  JSON,
  OCTET_STREAM,
  EVERYTHING
} = require('../../utils/mime-types')
const {
  Joi,
  cidVersion,
  cidBase
} = require('../../utils/validation')
const transformHash = require('../../utils/transform-hash')

module.exports = {
  method: 'GET',
  path: '/dag/{cid}',
  options: {
    handler: (request, reply) => {
      let promise

      if (request.headers.accept === EVERYTHING) {
        request.headers.accept = JSON
      }

      if (request.headers.accept === JSON) {
        promise = request.server.app.ipfs.dag.get(request.params.cid, {
          localResolve: request.query.localResolve
        })
          .then(result => {
            const output = result.value.toJSON()

            output.cid = transformHash(output.multihash, request.query.cidVersion, request.query.cidBase)
            delete output.multihash

            if (output.data) {
              output.data = output.data.toString('base64')
            }

            if (output.links) {
              output.links = output.links.map(link => {
                link.cid = transformHash(link.multihash, request.query.cidVersion, request.query.cidBase)
                delete link.multihash

                return link
              })
            }

            return output
          })
      } else {
        promise = request.server.app.ipfs.dag.data(request.params.cid, {
          offset: request.query.offset,
          length: request.query.length
        })
      }

      return promise
    },
    description: 'Get a DAG node',
    notes: 'Resolves a DAG node with the passed CID',
    tags: ['api'],
    validate: {
      params: {
        cid: Joi
          .cid()
          .description('The CID that corresponds to the DAG node we wish to retrieve')
      },
      query: {
        cidBase,
        cidVersion,
        localResolve: Joi
          .boolean()
          .default(false)
          .description('If set to true, it will avoid resolving through different objects')
      },
      headers: {
        accept: Joi.string()
          .default(JSON)
          .valid([
            JSON,
            OCTET_STREAM,
            EVERYTHING
          ])
      },
      options: {
        allowUnknown: true
      }
    },
    plugins: {
      'hapi-swagger': {
        id: 'get'
      }
    }
  }
}
