import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import socketClient from 'socket.io-client';

import "./assets/css/material-dashboard-react.css";
import store from "./store/index.jsx"
import indexRoutes from "./route/index.jsx";

const socket = socketClient();
socket.on('connect',()=>{
    console.log('connect')
})
socket.on('share-message',(data)=>{
  console.log(data)
})

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
