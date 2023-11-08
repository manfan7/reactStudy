import "./index.css";

import store from "./redux/redux-store";
import reportWebVitals from "./reportWebVitals";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/* import StoreContext from "./store-context";
import { Provider } from "./store-context"; */
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerender = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
        /* store={state}
          dispatch={store.dispatch.bind(store)} 
           store={store} */
        />
      </Provider>
    </React.StrictMode>
  );
};
rerender();
/* store.subscribe(() => {
  rerender();
}); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
