import { ApolloProvider } from "@apollo/client";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./app/App";
import client from "./graphql/apollo.config";
import "./index.css";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Theme>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);
