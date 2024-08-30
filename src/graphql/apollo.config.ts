import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";
import { toast } from "react-toastify";

const PORT = 8080;
const HOST = "localhost";
// const BASE_URL = `http://${HOST}:${PORT}/graphql`;
// const WS_URL = `ws://${HOST}:${PORT}/graphql`;
const BASE_URL = `https://socialite-server-its-rajesh-smp-rajesh-smps-projects.vercel.app/graphql`;
const WS_URL = `ws://socialite-server-its-rajesh-smp-rajesh-smps-projects.vercel.app/graphql`;

const httpLink = createHttpLink({
  uri: BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    "Apollo-Require-Preflight": "true",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: WS_URL,
    connectionParams: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      "Apollo-Require-Preflight": "true",
    },
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink,
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
  }
});

// Combine the error link with the rest of the links
const link = ApolloLink.from([errorLink, splitLink]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "network-only", // or 'no-cache'
    },
    query: {
      fetchPolicy: "network-only", // or 'no-cache'
    },
  },
});

export default client;
