import { ApolloProvider } from '@apollo/client'
import client from '../config/apollo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <ApolloProvider client={client}>
    <Component {...pageProps}/>
  </ApolloProvider>
  return <Component {...pageProps} />
}

export default MyApp
