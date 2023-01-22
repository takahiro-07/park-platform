import { gql } from '@apollo/client'

export const INCREMENT_TAG_QUERY = gql`
  mutation CreateTag($input: createTagInput!) {
    createTag(input: $input) {
      tag {
        id
        name
        tagNumber
        activeFlag
      }
    }
  }
`
