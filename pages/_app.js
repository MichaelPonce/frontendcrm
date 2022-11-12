/*
import { ApolloProvider } from "@apollo/client";
import ConnectClient from "../config/apollo";
import '../styles/globals.css'

 function MyApp ({ Component, pageProps }) {
  <ApolloProvider client =  {ConnectClient}>
    <Component {...pageProps}/>
  </ApolloProvider>
  return <Component {...pageProps} />
}

export default MyApp
*/




//Refactoring the code for the _App.js Because ApolloProvider Required that the consult need to be wrap
import { ApolloProvider } from "@apollo/client";
import ConnectClient from "../config/apollo";
import "../styles/globals.css";


export default function MyApp({Component, pageprops} = AppProps) {
  return (
    <ApolloProvider client={ConnectClient}>
      <Component {...pageprops} />
    </ApolloProvider>
  );
  
}