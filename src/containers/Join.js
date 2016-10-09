import React,{Component} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {SignUp , Header} from 'components';
class Join extends Component{
	render(){
		return(
		        <MuiThemeProvider muiTheme={getMuiTheme()}>
		          <div>
		          	<Header headerColor='active'/>
		          	<div className='container pageLayout'>
		          		<div className='row header-padding'>
							<SignUp />
		          		</div>
		          	</div>
		          </div>
		        </MuiThemeProvider>
			)
	}
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
export default connect(mapStateToProps,mapDispatchToProps)(Join)