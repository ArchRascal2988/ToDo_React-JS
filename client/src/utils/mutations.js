import { gql } from '@apollo/client';

export const NEW_USER=`
mutation Mutation($username: String!, $password: String!) {
    newUser(username: $username, password: $password) {
      token
    }
  }
`

export const LOGIN=`
mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`

export const NEW_TODO=`
mutation Mutation($task: String!) {
    newToDo(task: $task) {
      _id
      description
      task
      urgency
    }
  }
`

export const EDIT_TODO=`
mutation Mutation($tId: ID!) {
    editToDo(tId: $tId) {
      _id
      description
      task
      urgency
    }
  }
`

export const DELETE_TODO=`
mutation Mutation($id: ID!) {
    crossOff(_id: $id) {
      _id
    }
  }
`