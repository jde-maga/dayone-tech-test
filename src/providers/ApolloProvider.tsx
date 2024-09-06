import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from "@apollo/client";

const client = new ApolloClient({
  devtools: {
    enabled: true,
  },
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

type Props = {
  children: React.ReactNode;
};

const ApolloProvider = ({ children }: Props) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
