import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Route } from "./Route";

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
