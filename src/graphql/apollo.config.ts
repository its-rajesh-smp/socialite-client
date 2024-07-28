import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/graphql",
  headers: {
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:8080/graphql",
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
