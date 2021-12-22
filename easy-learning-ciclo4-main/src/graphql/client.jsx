import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://easy-learning-backend.herokuapp.com/graphql',
    cache: new InMemoryCache()
});

export {client};