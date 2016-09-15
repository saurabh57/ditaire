import React , {Component} from 'react';
import style from 'styles/components/mainBanner.css';

import SignIn from 'components/Login/SignIn';
const content = {
	'heading':'Introducing the all new',
	'brief':'A futuristic approach to meet your career goals',
	'company':'Diamantaire'
}
class MainBanner extends Component{
	render(){
		return(
				<div className='main-banner'>
					<div className='banner-content container'>
						<div className='introModal col-lg-8 col-md-8 col-sm-12 col-xm-12'>
							<IntroHeading />
						</div>
						<div className='signInModal col-lg-4 col-md-4 col-sm-12 col-xm-12'>
							<SignIn />
						</div>
					</div>
				</div>
			);
	}
}
const IntroHeading = (props)=>{
	return(
		<div className='intro-heading'>
			<h1>{content.heading} <span className='company-name'>{content.company}</span></h1>
			<p>{content.brief}</p>
		</div>
	)
}
export default MainBanner;