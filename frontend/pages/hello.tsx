import { NextPage } from 'next'
import { useApi } from './api/hello'

const Hello: NextPage = () => {
  const { hello, isLoading, isError } = useApi()

  if (isLoading) return <p>...ローディング</p>
  if (isError) return <p>...エラー</p>
  if (!hello) return <p>...エラー</p>

  return <p>{hello.id}</p>
}

export default Hello
