import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom'
import ShareHome from './f_share/index'
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class Home extends React.Component {
  render() {
    return <Provider >
			 <Router history={history}>
				  <Switch>
					  <Route path="/" exact component={ShareHome} />
					  <Route path="/share" exact component={ShareHome} />
				  </Switch>
			 </Router>
           </Provider>
  }
}

ReactDOM.render(
	    <Home />,
	    document.getElementById('app')
);
