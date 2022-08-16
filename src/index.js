import React from "react";
import App from "./components/App";
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';
import {createRoot} from "react-dom/client";
import store from "./state/store";

const root = createRoot(document.querySelector("#root"));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
