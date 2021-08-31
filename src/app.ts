import { ApolloServer } from 'apollo-server'
import { typeDefs } from 'graphql/schema'
import { resolvers } from 'graphql/resolvers'

//paths linker
import 'module-alias/register'

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});


