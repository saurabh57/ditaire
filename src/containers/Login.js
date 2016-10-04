import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {SignIn , SignUp , Header} from 'components';

class Login extends Component{
	render(){
		return(
		        <MuiThemeProvider muiTheme={getMuiTheme()}>
		          <div>
		          	<Header headerColor='active'/>
		          	<div className='container pageLayout flex'>
		          		<div className='self-aligned margin-auto'>
		          			<SignIn color='grey' 
			          				fullWidthButtton={true} 
			          				linkColor='#00BFA5'
			          				showHeader={true}
			          				defaultBackground={true}
			          		/>
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