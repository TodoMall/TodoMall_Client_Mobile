import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/browser";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_ENDPOINT, isProd } from "./constants";

if (!isProd) {
    console.warn("Mock Service Worker is Running 🏄🏄🏄");
    worker.start({
        onUnhandledRequest: "bypass",
    });
}

const client = new ApolloClient({
    uri: API_ENDPOINT,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
