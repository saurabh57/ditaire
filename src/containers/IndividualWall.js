import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Header,IndividualWallComponents} from 'components';

class IndividualWall extends Component{
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
		          		<div className='row header-padding component-container'>
							<IndividualWallComponents />
		          		</div>
		          	</div>
		          </div>
		        </MuiThemeProvider>
			)
	}
}
IndividualWall.propTypes = {

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
export default connect(mapStateToProps,mapDispatchToProps)(IndividualWall)
