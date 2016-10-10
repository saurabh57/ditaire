import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Header} from 'components';

class IndividualProfile extends Component{
	constructor(props){
		super(props)
		this.state={}
	}
	render(){
		return (
				<MuiThemeProvider muiTheme={getMuiTheme()}>
		          <div>
		          	<Header headerColor='active' setting='profile'/>
		          	<div className='container pageLayout'>
		          		<div className='row header-padding'>
							<div>Individual profile</div>
		          		</div>
		          	</div>
		          </div>
		        </MuiThemeProvider>
			)
	}
}
IndividualProfile.propTypes = {

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
export default connect(mapStateToProps,mapDispatchToProps)(IndividualProfile)
