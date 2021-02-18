import express from 'express';
import { graphqlHTTP } from 'express-graphql'

import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'

import resolvers from './resolvers/index.js';

const typeDefs = loadSchemaSync('./graphql/index.graphql', {
    loaders: [new GraphQLFileLoader()]
});

const schema = addResolversToSchema({
    schema: typeDefs,
    resolvers,
});

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(3000);

console.log('Server listening on http://localhost:3000');