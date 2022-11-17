const {gql}= require('apollo-server-express');
//qhaT
module.exports={
    typeDefs: gql`
        type ToDo{
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
            allTodos(userId: ID!): [ToDo]
        }

        type Mutation{
            newUser(username: String!, password: String!): User
            login(username: String!, password: String!): User
            newToDo(task: String!, description: String, urgency: Int): ToDo
            editToDo(task: String, description: String, urgency: Int): ToDo
            crossOff(_id: ID!): User
        }
    `
}