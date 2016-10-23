import React,{Component} from 'react';
import {Link} from 'react-router';
import {replaceParamInRoot} from 'utils';
import Icon from 'components/common/Icon';
import styles from 'styles/components/individualWall.css'
import PATHS from 'routes';
import AddPost from 'components/Post/AddPost';

let _profileLink = replaceParamInRoot(PATHS.individualProfile,'individual','saurabhpanday');
let _profileItems = [
	{
		'name':'News Feed',
		'id':'newFeed',
		'link':PATHS.individual
	},
	{
		'name':'Profile',
		'id':'profile',
		'link':_profileLink
	},
	{
		'name':'Career',
		'id':'career',
		'link':''
	},
	{
		'name':'Community',
		'id':'community',
		'link':''
	}
]

class IndividualWallComponents extends Component{
	constructor(props){
		super(props);
		this.state={
			activeLink:location.pathname
		}
	}
	render(){
		return (
				<div className='row'>
					<div className='transparentComponent col-lg-2 col-md-2'>
						<ProfileName name={`Saurabh Panday`} link={_profileLink}/>
						<ProfileItems profileItems={_profileItems} activeLink={this.state.activeLink}/>
					</div>
					<div className='component mid-container col-lg-6 col-md-6'><AddPost /></div>
					<div className='transparentComponent col-lg-2 col-md-2'></div>
				</div>
			)
	}
}
const ProfileName = (props)=>{
	return(
			<Link to={props.link}>
				<div className='profile-image'>
					<Icon icon={`user`} />
				</div>
				<div className='profile-name'>{props.name}</div>
			</Link>
		)
}
const ProfileItems = (props)=>{
	let activeLink = props.activeLink,
		items = props.profileItems;
	return (
		<div className='profileItems-container'>
			{
				items.map((item,index)=>{
					let active = item.link === activeLink ? 'activeProfile-item':'';
					return <Link to={item.link} key={index} className={`profile-item ${active}`}><div id={item.id}>{item.name}</div></Link>
				})
			}
		</div>
	)
}
export default IndividualWallComponents;