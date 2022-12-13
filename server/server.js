const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const {typeDefs, resolvers}= require('./schemas')
const db = require('./config/connection');
const contextActions= require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 3001;
const server= new ApolloServer({
  typeDefs,
  resolvers,
  context: contextActions
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const startApolloServer= async (typeDefs, resolvers) =>{
  await server.start();
  server.applyMiddleware({app});

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Now listening on localhost: ${PORT}`);
      console.log(`GraphQL GUI: http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
};
  
startApolloServer(typeDefs, resolvers);
