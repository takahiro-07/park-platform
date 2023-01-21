import { gql } from '@apollo/client'
export const TAGS_QUERY = gql`
  query Tags {
    tags {
      id
      name
      tagNumber
      activeFlag
    }
  }
`
