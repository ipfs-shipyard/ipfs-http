'use strict'

module.exports = `
  type DagNode {
    cid: String!,
    size: Int,
    links: [DagLink]
  }

  type DagLink {
    cid: String!,
    name: String,
    size: Int,
  }

  type FileNode {
    cid: String!
  }

  type Query {
    dagGet(cid: String!, cidBase: String, cidVersion: Int): DagNode
    filesList(path: String!): FileNode
  }

  type Mutation {
    dagCreate(data: String!): DagNode
  }

  schema {
    query: Query
    mutation: Mutation
  }
`
