import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: "https://fitness-gym82.herokuapp.com/graphql",
});

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists


//     const token = localStorage.getItem("user");
    
//     const user =  JSON.parse(token);
//     // return the headers to the context so httpLink can read them
//     return {
//       headers: {
//         ...headers,
//         authorization: token ? `Bearer ${token?.jwt}` : "",
//       },
//     };
  
// });

const client = new ApolloClient({
  link:  httpLink,
  cache: new InMemoryCache(),
});
export default client;
