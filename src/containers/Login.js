import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {SignIn , SignUp , Header} from 'components';
import PATHS from 'routes';

let renderComponent ;
class Login extends Component{
	constructor(props){
		super(props);
		this.state ={

		}
	}
	componentWillMount(){
		const {location} = this.props;
		if(location.pathname === PATHS.signup){

		}else{
			
		}
	}
	componentDidMount(){

	}
	render(){
		return(
		        <MuiThemeProvider muiTheme={getMuiTheme()}>
		          <div className='container-fluid'>
		          	<Header />
		          	<div className='container'>
		          		{
		          			(()=>{
		          				if(location.pathname === PATHS.signup){
		          					return <SignUp />
		          				}else{
		          					return <SignIn />
		          				}
		          			})()
		          		}
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