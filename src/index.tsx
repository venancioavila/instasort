import React from 'react'
import Routes from './routes'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
