import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_SERVER_URL;
// const WS_URL = import.meta.env.VITE_SERVER_URL_WSS;

const getHttpLink = () =>
  createHttpLink({
    uri: BASE_URL,
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

/**
 * This function is used for generating subscriptions link
 */
// const getWsLink = () =>
//   new GraphQLWsLink(
//     createClient({
//       url: WS_URL,
//       connectionParams: {
//         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//         "Apollo-Require-Preflight": "true",
//       },
//     }),
//   );

/**
 * Split link to handle subscriptions and non-subscriptions queries
 */
// const getSplitLink = () =>
//   split(
//     ({ query }) => {
//       const definition = getMainDefinition(query);
//       return (
//         definition.kind === "OperationDefinition" &&
//         definition.operation === "subscription"
//       );
//     },
//     getHttpLink(),
//     // getWsLink(),
//   );

/**
 * This function is used for handling graphql errors
 */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      toast.error(`${message}`);
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

/**
 * This function is used for generating client link
 * @returns  ApolloLink
 */
const getClientLink = () => ApolloLink.from([errorLink, getHttpLink()]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: getClientLink(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only", // or 'no-cache'
    },
    query: {
      fetchPolicy: "network-only", // or 'no-cache'
    },
  },
});

/**
 * This function is used for resetting client
 */
export const resetClient = () => {
  client.setLink(getClientLink());
};

export default client;
