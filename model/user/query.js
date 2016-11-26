const { GraphQLNonNull } = require('graphql')
const UserType = require('./type')

module.exports = {
  type: UserType,
  args: {
    _id: { type: new GraphQLNonNull(GraphQLID) }
  },
  resolve (root, args, context) {
    console.log(root)
    console.log(args)
    console.log(context)
    return { name: 'Igor', email: 'igor@devstacks.com.br' }
  }
}
