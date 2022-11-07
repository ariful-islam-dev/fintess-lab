import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
	uri: 'https://fitness-gym82.herokuapp.com/graphql',
	cache: new InMemoryCache(),
});

export default client;