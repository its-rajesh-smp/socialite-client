import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const PORT = 8080;
const HOST = "localhost";
const BASE_URL = `http://${HOST}:${PORT}/graphql`;
const WS_URL = `ws://${HOST}:${PORT}/graphql`;

const httpLink = createHttpLink({
  uri: BASE_URL,
  headers: {
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: WS_URL,
    connectionParams: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
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

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

export default client;
