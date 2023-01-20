import { NextPage } from 'next'
import { useEffect, useState } from 'react'

type Todo = {
  id: string
  title: string
  text: string
  email: string
}

const TagsPage: NextPage = () => {
  // const { hello, isLoading, isError, saveDate } = useApi()
  // const [todos, setTodos] = useState<Todo[]>([])

  // useEffect(() => {

  // }, [])

  // if (isLoading) return <p>...ローディング</p>
  // if (isError) return <p>...エラー</p>
  // if (!hello) return <p>...エラー</p>

  return (
    <>
      <p>{"tag"}</p>
    </>
  )
}

export default TagsPage
