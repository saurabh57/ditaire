import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {SignIn , SignUp , Header} from 'components';
import PATHS from 'routes';

let isSignup = true,title='';
class Login extends Component{
	constructor(props){
		super(props);
		this.state ={

		}
	}
	componentWillMount(){
		const {location} = this.props;
		if(location.pathname === PATHS.signup){
			isSignup = true;
			title = 'Sign Up';
		}else{
			isSignup = false;
			title = 'Sign In';
		}
	}
	render(){
		return(
		        <MuiThemeProvider muiTheme={getMuiTheme()}>
		          <div>
		          	<Header headerColor='active'/>
		          	<div className='container pageLayout flex'>
		          		<div className='row text-center'>{title}</div>
		          		<div className='self-aligned margin-auto'>
		          			{
			          			(()=>{
			          				if(isSignup){
			          					return <SignUp />
			          				}else{
			          					return <SignIn color='grey' fullWidthButtton={true} linkColor='#00BFA5'/>
			          				}
			          			})()
			          		}
		          		</div>
		          	</div>
		          </div>
		        </MuiThemeProvider>
			)
	}
}

Login.PropTypes = {

}
function mapStateToProps(state){
	return {

	}
}
function mapDispatchToProps(dispatch){
	return {
		dispatch
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)