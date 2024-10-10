import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getToken } from "next-auth/jwt";
import { onError } from "@apollo/client/link/error";
export type { NormalizedCacheObject, ApolloClient };

const httpUrl =
  process.env.BACKEND_HTTPS_URL ?? "http://localhost:4000/graphql";

/**
 * Function to get the authentication token
 */
async function getAuthToken(req?: any): Promise<string | null> {
  const secret = process.env.JWT_SECRET as string;
  const salt = process.env.JWT_SALT as string;
  const secureCookie = process.env.NODE_ENV === "production";

  if (secret && salt) {
    const token = await getToken({
      secureCookie,
      secret,
      salt,
      req: {
        headers: {
          cookie: "",
        },
      },
    } as any);
    return token as any;
  }
  return null;
}

/**
 * Function to create a new Apollo Client instance
 */
export function createApolloClient(req?: any): ApolloClient<NormalizedCacheObject> {
  const httpLink = new HttpLink({ uri: httpUrl });

  const authLink = setContext(async (_, { headers }) => {
    const token = await getAuthToken(req);
    return {
      headers: {
        ...headers,
        keepAlive: false,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  // Error handling link
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );

    if (networkError) console.error(`[Network error]: ${networkError}`);
  });

  return new ApolloClient({
    link: errorLink.concat(authLink.concat(httpLink)),
    cache: new InMemoryCache(),
  });
}
