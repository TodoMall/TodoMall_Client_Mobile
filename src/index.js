import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/browser";
import { ScrollToTop } from "./utils";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

if (process.env.REACT_APP_NODE_ENV === "development") {
  worker.start({
    onUnhandledRequest: "bypass",
  });
}
const SERVER_API_URL = process.env.SERVER_API_URL;

const client = new ApolloClient({
  uri: SERVER_API_URL,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
