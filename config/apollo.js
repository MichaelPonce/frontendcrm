import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import {  fetch } from 'node-fetch'

const ConnectClient = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link : new HttpLink({
        uri: 'http://localhost:4000',
        fetch
    })
});

export default ConnectClient;