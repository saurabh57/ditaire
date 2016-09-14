require('normalize.css/normalize.css');
require('styles/App.css');
import React from 'react';
import { Header , MainBanner , Features , Footer} from 'components';

class AppComponent extends React.Component {
  render() {
    return (
		  <div>
        	<Header />
        	<MainBanner />
        	<Features />
        	<Footer />
     	 </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
