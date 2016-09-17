import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import PATHS from './routes'
import configureStore from './stores';
import {App,Login} from './containers';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path={PATHS.default} component={App}></Route>
    	<Route path={PATHS.signin} component={Login} location={location}></Route>
    	<Route path={PATHS.signup} component={Login} location={location}></Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
