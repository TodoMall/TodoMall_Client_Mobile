import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { API_ENDPOINT } from "../../constants";

const CustomApolloProvider = ({ children = null }) => {
    const client = new ApolloClient({
        uri: API_ENDPOINT,
        cache: new InMemoryCache(),
    });

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default CustomApolloProvider;
