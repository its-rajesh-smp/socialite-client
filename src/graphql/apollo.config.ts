import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { getMainDefinition } from "@apollo/client/utilities";
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

const getSplitLink = () =>
  split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    getHttpLink(),
    // getWsLink(),
  );

// Error handling link
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
    toast.error(`Oops! Something went wrong.`);
  }
});

// Combine the error link with the rest of the links
const getClientLink = () => ApolloLink.from([errorLink, getSplitLink()]);

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

export const resetClient = () => {
  client.setLink(getClientLink());
};

export default client;
