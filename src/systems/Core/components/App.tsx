import { FC } from 'react'
// import { ApolloProvider } from '@apollo/client'

import { Chakra } from '@/systems/Core'
// import { client } from '@/systems/Api'

export const App: FC = ({ children }) => {
  return (
    // <ApolloProvider client={client}>
    <Chakra>{children}</Chakra>
    // </ApolloProvider>
  )
}
