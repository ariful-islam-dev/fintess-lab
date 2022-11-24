import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getLocalStore } from '../../utils/storage';

const httpLink = createHttpLink({
  uri:'https://fitness-gym82.herokuapp.com/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  let token;
  if (typeof window !== 'undefined') {
	token  = getLocalStore('user');
  }

  
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token?.accessToken}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;