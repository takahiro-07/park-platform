import { gql } from '@apollo/client'

export const DELETE_TAG_QUERY = gql`
  mutation DeleteTag($id: ID!) {
    deleteTag(input: { id: $id }) {
      deleted
    }
  }
`
