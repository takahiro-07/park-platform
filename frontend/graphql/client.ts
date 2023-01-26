import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'
// const httpLink = new HttpLink({
//   uri: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`,
// })
const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`,
    fetch: (...args) => fetch(...args),
  }),
  cache: new InMemoryCache(),
})

export default client
