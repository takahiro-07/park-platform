import axios from 'axios'
import useSWR from 'swr'

type Test = { id: number; name: string }

export const useApi = () => {
  const fetcher = (url: string): Promise<Test> => axios(url).then((res) => res.data)

  const { data, error } = useSWR('http://localhost:8000/api/hello', fetcher)

  console.log(data)

  return { hello: data, isLoading: !error && !data, isError: error }
}
