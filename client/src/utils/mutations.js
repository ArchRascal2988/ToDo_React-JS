import { gql } from '@apollo/client';

export const NEW_USER=gql`
mutation Mutation($username: String!, $password: String!) {
    newUser(username: $username, password: $password) {
      token
      user
    }
  }
`

export const LOGIN=gql`
mutation Mutation($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user
    }
  }
`

export const NEW_TODO=gql`
mutation Mutation($task: String!) {
    newToDo(task: $task) {
      _id
      description
      task
      urgency
    }
  }
`

export const EDIT_TODO=gql`
mutation Mutation($tId: ID!) {
    editToDo(tId: $tId) {
      _id
      description
      task
      urgency
    }
  }
`

export const DELETE_TODO=gql`
mutation Mutation($id: ID!) {
    crossOff(_id: $id) {
      _id
    }
  }
`