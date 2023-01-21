import { useQuery } from '@apollo/client'
import { NextPage } from 'next'
import { Router, useRouter } from 'next/router'
import { TagQuery } from '../../graphql/generated/documents'
import { TAG_QUERY } from '../../graphql/queries/tags/tag.graphql'

const TagPage: NextPage = () => {
  const router = useRouter() as Router & {
    query: { id: string }
  }

  const { loading, error, data } = useQuery<TagQuery>(TAG_QUERY, {
    variables: { id: router.query.id },
  })

  if (loading) return <p>...ローディング</p>
  if (error) return <p>...エラー</p>
  if (!data?.tag) return <p>...エラー</p>

  return (
    <>
      <p>{data.tag.name}</p>
    </>
  )
}

export default TagPage
