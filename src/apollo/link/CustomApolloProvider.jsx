import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const CustomApolloProvider = ({ children = null }) => {
    const client = new ApolloClient({
        uri: process.env.REACT_APP_TODO_MALL_API_ENDPOINT,
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default CustomApolloProvider;
