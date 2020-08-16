//get all the libraries needed
const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const {GraphQLSchema} = require('graphql');

const {queryType} = require('./query.js');

//setting up the port number and express app
const port = 4500;
const app = express();

const cors = require('cors');

app.use(cors());

 // Define the Schema
const schema = new GraphQLSchema({ query: queryType });

//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);