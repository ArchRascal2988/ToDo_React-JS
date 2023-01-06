import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';

import Auth from './utils/Auth';
import Home from './componets/pages/Home';
import Landing from './componets/pages/Landing';
 
const endpoint= createHttpLink({
  uri: '/graphql',
});

const setHeader= setContext((_, {headers}) => {
    const token= Auth.getToken();
    
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
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
        </Routes>
      </Router>
    </ApolloProvider>  
  );
}

export default App;
