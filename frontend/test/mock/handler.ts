import { graphql } from 'msw'
import { TagsDocument } from '../../graphql/generated/documents'

export const handlers = [
  graphql.query(TagsDocument, (req, res, ctx) =>
    res.once(
      ctx.data({
        __typename: 'Query',
        tags: [
          { id: '1', name: 'test1', tagNumber: 1, activeFlag: true },
          { id: '2', name: 'test2', tagNumber: 2, activeFlag: true },
        ],
      })
    )
  ),
]
