'use strict'

const pkg = require('./package.json')
const { ApolloServer } = require('apollo-server-hapi')

const schema = require('./schema')
const resolvers = require('./resolvers')

module.exports = {
  register: async (server, options) => {
    const apollo = new ApolloServer({
      typeDefs: [
        schema
      ],
      resolvers: resolvers(),
      tracing: true
    })

    await apollo.applyMiddleware({
      app: server
    })

    await apollo.installSubscriptionHandlers(server.listener)
  },
  version: pkg.version,
  name: pkg.name
}
