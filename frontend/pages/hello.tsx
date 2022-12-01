import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useApi } from './api/hello'
import { collection, getDocs, onSnapshot} from 'firebase/firestore'
import { db } from '../firebase'

type Todo = {
  id: string
  title: string
  text: string
  email: string
}

const Hello: NextPage = () => {
  const { hello, isLoading, isError, saveDate } = useApi()
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    const usersCollectionRef = collection(db, 'todos')
    // getDocs(usersCollectionRef).then((querySnapshot) => {
    //   // TODO: アサーションでやらない方法 https://www.gixo.jp/blog/15372/
    //   const todoResult = querySnapshot.docs.map((doc) => ({ ...(doc.data() as Todo), id: doc.id }))
    //   console.log(1)
    //   setTodos(todoResult)
    // })
    const unsub = onSnapshot(usersCollectionRef, (querySnapshot) => {
      // TODO: アサーションでやらない方法 https://www.gixo.jp/blog/15372/
      setTodos(querySnapshot.docs.map((doc) => ({ ...(doc.data() as Todo), id: doc.id })))
      console.log(2)
    })
    return unsub
  }, [])

  if (isLoading) return <p>...ローディング</p>
  if (isError) return <p>...エラー</p>
  if (!hello) return <p>...エラー</p>

  console.log(process.env.NEXT_PUBLIC_APP_ID)

  return (
    <>
      <p>{hello.id}</p>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.email}</div>
      ))}
      <button onClick={saveDate}>追加</button>
    </>
  )
}

export default Hello
