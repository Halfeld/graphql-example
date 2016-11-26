const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt
} = require('graphql')

const User = require('./user')

module.exports = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: () => User.name
    },
    email: {
      type: GraphQLString,
      resolve: () => User.email
    },
    cellphone: {
      type: GraphQLString,
      resolve: () => User.cellphone
    },
    active: {
      type: GraphQLBoolean,
      resolve: () => User.active
    },
    years: {
      type: GraphQLInt,
      resolve: () => User.years
    }
  })
})
