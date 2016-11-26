const { GraphQLSchema, GraphQLObjectType } = require('graphql')
const UserQuery = require('./user/query')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      user: UserQuery
    }
  })
})
