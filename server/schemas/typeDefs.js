const {gql}= require('apollo-server-express');

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

type Query{
    allTodos(uId: ID!): [Todo]
}

type Mutation{
    newUser(username: String!, password: String!): User
    login(username: String!, password: String!): User
    newToDo(task: String!, description: String, urgency: Int, userId: ID!): Todo
    editToDo(tId: ID!, task: String, description: String, urgency: Int): Todo
    crossOff(_id: ID!): Todo
}
`

module.exports= typeDefs;