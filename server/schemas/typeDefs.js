const { gql }= require('apollo-server-express');

const typeDefs= gql`
type Todo{
    _id: ID
    task: String
    description: String
    urgency: Int
}

type User{
    _id: ID
    username: String
    password: String
}

type Auth{
    token: ID!
    user: ID!
}

type Query{
    allTodos: [Todo]
}

type Mutation{
    newUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    newToDo(task: String!, description: String, urgency: Int): Todo
    editToDo(tId: ID!, task: String, description: String, urgency: Int): Todo
    crossOff(_id: ID!): Todo
}
`

module.exports= typeDefs;