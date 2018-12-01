import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'


import "./assets/css/material-dashboard-react.css";
import store from "./store/index.jsx"
import indexRoutes from "./route/index.jsx";
import Notifications from "./public/notification"

import SokcetServer from "./public/socket"
import { REDIS_MESSAGE } from "../config/constConfig"

const notify = new Notifications({title:'记录快乐'})

notify.showNotify()

new SokcetServer({
  events:{
    'connect':()=>{
      console.log('connect')
    },
    [REDIS_MESSAGE.SHARE_MESSAGE.EVENT]:(message='{}')=>{
      const msg = JSON.parse(message)
      if(msg.user && window.__USER_INFO__ && msg.user!=window.__USER_INFO__._id){
         notify.showNotify({body:JSON.parse(message).body})
      }
    }
  }
});


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
