import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { CustomApolloProvider } from "./apollo/link";
import { isProd } from "./constants";
import { worker } from "./mocks/browser";
import reportWebVitals from "./reportWebVitals";
import { ScrollToTop } from "./utils";

// if (!isProd) {
//     console.warn("Mock Service Worker is Running 🏄🏄🏄");
//     worker.start({
//         onUnhandledRequest: "bypass",
//     });
//     console.warn("🏄🏄🏄 Current Set API Endpoint 🏄🏄🏄 \n", API_ENDPOINT);
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <CustomApolloProvider>
            <ScrollToTop />
            <App />
        </CustomApolloProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
