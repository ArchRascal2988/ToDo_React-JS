import { gql } from '@apollo/client';

export const QUERY_TODOS= `
query Query {
    allTodos {
      _id
      description
      task
      urgency
    }
  }
`