const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      name: {
        type: GraphQLString,
        resolve () {
          return 'Igor Luíz'
        }
      }
    }
  })
})
