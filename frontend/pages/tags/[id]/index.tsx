import { useMutation, useQuery } from '@apollo/client'
import { NextPage } from 'next'
import { Router, useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import {
  DeleteTagDocument,
  TagQuery,
  UpdateTagDocument,
} from '../../../graphql/generated/documents'
import { TagInput } from '../../../graphql/generated/types'
import { TAG_QUERY } from '../../../graphql/queries/tags/tag.graphql'

const TagPage: NextPage = () => {
  const router = useRouter() as Router & {
    query: { id: string }
  }

  const { loading, error, data } = useQuery<TagQuery>(TAG_QUERY, {
    variables: { id: router.query.id },
  })

  const [tagInput, setTagInput] = useState<TagInput>(data?.tag || {})
  const [updateTag] = useMutation(UpdateTagDocument)
  const [deleteTag] = useMutation(DeleteTagDocument)

  const handleUpdateTag = useCallback(
    (tag: TagInput) => {
      return updateTag({
        variables: { input: { params: tag } },
        onCompleted: (e) => {
          console.log(e)
        },
        onError: (e) => {
          // 失敗時の処理
          console.error(e)
        },
      })
    },
    [updateTag]
  )

  useEffect(() => {
    const tag = {
      id: data?.tag.id,
      name: data?.tag.name,
      tagNumber: data?.tag.tagNumber,
      activeFlag: data?.tag.activeFlag,
    }
    setTagInput(tag || {})
  }, [data?.tag])

  if (loading) return <p>...ローディング</p>
  if (error) return <p>...エラー</p>
  if (!data?.tag) return <p>...エラー</p>
  if (!tagInput) return <p>...エラー</p>

  return (
    <>
      <form
        className="formInput"
        onSubmit={(e) => {
          e.preventDefault()
          if (!tagInput) return
          handleUpdateTag(tagInput)
        }}
      >
        <input
          className="input"
          placeholder="タグ名"
          value={tagInput?.name || ''}
          onChange={(e) => setTagInput({ ...tagInput, name: e.target.value })}
        />
        <input
          className="input"
          placeholder="タグ番号"
          type="number"
          value={tagInput?.tagNumber || 0}
          onChange={(e) => setTagInput({ ...tagInput, tagNumber: e.currentTarget.valueAsNumber })}
        />
        <button>タグの更新</button>
      </form>
      <button
        onClick={() =>
          deleteTag({
            variables: { id: router.query.id },
            onCompleted: (e) => {
              console.log(e)
            },
            onError: (e) => {
              // 失敗時の処理
              console.error(e)
            },
          })
        }
      >
        削除
      </button>
    </>
  )
}

export default TagPage
