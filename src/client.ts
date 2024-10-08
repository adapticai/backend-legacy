import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { createClient } from "graphql-ws";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getToken } from "next-auth/jwt";

export type { NormalizedCacheObject, ApolloClient } from "@apollo/client";

const httpUrl =
  process.env.BACKEND_HTTPS_URL ?? "http://localhost:4000/graphql";
const wsUrl = process.env.BACKEND_WS_URL ?? "ws://localhost:4000/subscriptions";

async function getAuthToken() {
  const secret = process.env.JWT_SECRET as string;
  const salt = process.env.JWT_SALT as string;
  const secureCookie = process.env.NODE_ENV === "production";

  if (secret && salt) {
    return await getToken({
      secureCookie,
      secret,
      salt,
      req: {
        headers: {
          cookie: "",
        },
      },
    } as any);
  }
  return null;
}

function createApolloClient(token: string | null) {
  const httpLink = new HttpLink({
    uri: httpUrl,
  });

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }));

  const httpAuthLink = authLink.concat(httpLink);

  const link =
    typeof window === "undefined"
      ? httpAuthLink
      : split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        new GraphQLWsLink(
          createClient({
            url: wsUrl,
            connectionParams: async () => {
              const token = await getAuthToken();
              return { authorization: token ? `Bearer ${token}` : "" };
            },
            on: {
              connected: () => console.log("WebSocket connection opened"),
              opened: () => console.log("WebSocket connection established"),
              closed: () => console.log("WebSocket connection closed"),
              error: (error) =>
                console.error("WebSocket connection error:", error),
            },
          }),
        ),
        httpAuthLink,
      );

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}

export async function initializeApolloServerSide() {
  const token = await getAuthToken();
  return createApolloClient(token as unknown as string);
}

export async function initializeApolloClientSide() {
  const token = await getAuthToken();
  return createApolloClient(token as unknown as string);
}

export const makeClient = async () => {
  return initializeApolloClientSide() as unknown as ApolloClient<any>;
};
