import { useLazyQuery, useQuery } from '@apollo/client'
import { NextPage } from 'next'

import { TagsQuery } from '../../graphql/generated/documents'
import { TAGS_QUERY } from '../../graphql/queries/tags/tags.graphql'

const TagsPage: NextPage = () => {
  const { loading, error, data } = useQuery<TagsQuery>(TAGS_QUERY)

  // useLazyQueryはuseEffect内で使わないといけないので画面遷移時にデータをフェッチする場合は、useQueryがベストだと思う
  
  // const [requestTags, { data: tagsResult, loading: tagsLoading, error: tagsError }] =
  //   useLazyQuery(TagsDocument)

  // useEffect(() => {
  //   requestTags({
  //     onCompleted: () => {
  //       console.log('tags success')
  //     },
  //     onError: () => {
  //       console.log('tags error')
  //     },
  //     variables: {},
  //   })
  // }, [requestTags])

  if (loading) return <p aria-label="ローディング">...ローディング</p>
  if (error) return <p>...エラー</p>
  if (!data?.tags) return <p>...エラー</p>

  return (
    <>
      {data?.tags.map((tag) => (
        <p key={tag.id} data-testid={`tag_${tag.id}`}>
          {tag.name}
        </p>
      ))}
    </>
  )
}

export default TagsPage
