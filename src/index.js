import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';


import { networkInterface } from './config';

const apolloClient = new ApolloClient({
  link: new HttpLink({uri: networkInterface}),
  cache: new InMemoryCache()
});

  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <App/>
    </ApolloProvider>,
    document.getElementById('root')
  );
