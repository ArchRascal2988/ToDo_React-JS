import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const endpoint= createHttpLink({
  uri: '/graphql',
});

const setHeader= setContext((_, {headers}) => {
    const token= localStorage.getItem('id_token');

    return {
      headers:{
        ...headers,
        authorization: token ? `Bearer: ${token}` : ''
      }
    };
});

const client= new ApolloClient({
  link: setHeader.concat(endpoint),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main>
      <div> hello world</div>

      <Router>
          <Routes>

          </Routes>
      </Router>
    </main>
    </ApolloProvider>
  );
}

export default App;
