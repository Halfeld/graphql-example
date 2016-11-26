const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./model/schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const server = app.listen(3000, () => console.log('Server running'))
