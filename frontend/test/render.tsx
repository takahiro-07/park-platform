import { ApolloProvider } from '@apollo/client'
import { render } from '@testing-library/react'
import { GraphQLHandler, GraphQLRequest } from 'msw'
import React from 'react'
import client from './../graphql/client'
import { server } from './mock/server'

export const testRender =
  (children: React.ReactNode) => (responseOverride?: GraphQLHandler<GraphQLRequest<never>>) => {
    if (responseOverride) {
      server.use(responseOverride)
    }
    render(<ApolloProvider client={client}>{children}</ApolloProvider>)
  }
