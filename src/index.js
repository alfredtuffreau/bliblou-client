import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";

import App from "./App";

import "./index.css";
import { configAWS } from "./configs";
import { store } from "./store";
import * as server from "./server";

configAWS();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

server.unregister();
