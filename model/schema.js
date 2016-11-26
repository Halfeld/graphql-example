const { GraphQLSchema } = require('graphql')

const UserQuery = require('./user/query')
const UserMutation = require('./user/mutation')

module.exports = new GraphQLSchema({
  query: UserQuery,
  mutation: UserMutation
})
