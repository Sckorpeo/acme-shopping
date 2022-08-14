import React from "react";
import App from "./app";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import store from "../state/store";
const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
