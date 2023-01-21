import { gql } from '@apollo/client'

export const TAG_QUERY = gql`
  query Tag($id: ID!) {
    tag(id: $id) {
      id
      name
      tagNumber
      activeFlag
    }
  }
`
