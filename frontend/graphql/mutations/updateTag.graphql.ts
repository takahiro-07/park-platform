import { gql } from '@apollo/client'

export const UPDATE_TAG_QUERY = gql`
  mutation UpdateTag($input: updateTagInput!) {
    updateTag(input: $input) {
      tag {
        id
        name
        tagNumber
        activeFlag
      }
    }
  }
`
