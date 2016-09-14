import React , {Component} from 'react';
import style from 'styles/components/mainBanner.css';

import SignIn from 'components/Login/SignIn';

class MainBanner extends Component{
	render(){
		return(
				<div className='main-banner'>
					<div className='banner-content'>
						<SignIn />
					</div>
				</div>
			);
	}
}

export default MainBanner;