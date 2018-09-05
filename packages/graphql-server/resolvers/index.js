'use strict'

const dag = require('./dag')
const files = require('./files')

module.exports = (models) => {
  return {
    Query: {
      ...dag.Query,
      ...files.Query
    },
    Mutation: {}
  }
}
