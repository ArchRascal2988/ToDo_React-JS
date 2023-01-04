import { gql } from '@apollo/client';

export const QUERY_TODOS=gql`
query Query {
    allTodos {
      _id
      description
      task
      urgency
    }
  }
`