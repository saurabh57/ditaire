import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import PATHS from './routes'
import configureStore from './stores';
import {App,Login,Join,IndividualWall,IndividualProfile,OrganizationWall,OrganizationProfile} from './containers';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
    	<Route path={PATHS.default} component={App}></Route>
    	<Route path={PATHS.signin} component={Login} location={location} />
    	<Route path={PATHS.signup} component={Join} location={location} />
    	<Route path={PATHS.organization} component={OrganizationWall} location={location} />
        <Route path={PATHS.organizationProfile} component={OrganizationProfile} location={location} />
    	<Route path={PATHS.individual} component={IndividualWall} location={location} />
        <Route path={PATHS.individualProfile} component={IndividualProfile} location={location} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
