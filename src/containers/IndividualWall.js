import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {Header,IndividualWallComponents} from 'components';
import * as actions from 'actions/feedsAction';

class IndividualWall extends Component{
	constructor(props){
		super(props)
		this.state={}
	}
	render(){
		const {feeds,addPostInFeeds} = this.props;
		return (
				<MuiThemeProvider muiTheme={getMuiTheme()}>
		          <div>
		          	<Header headerColor='active' setting='profile'/>
		          	<div className='container pageLayout'>
		          		<div className='row header-padding component-container'>
							<IndividualWallComponents feeds={feeds.posts} addPostInFeeds={addPostInFeeds}/>
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
		feeds:state.feeds
	}
}
function mapDispatchToProps(dispatch){
	return {
		dispatch,
		addPostInFeeds:(post)=>{
			actions.addPostInFeeds(dispatch,[post]);
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(IndividualWall)
