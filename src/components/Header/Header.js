import React , {Component} from 'react';
import {Link} from 'react-router';
import style from 'styles/components/header.css';
import PATHS from 'routes';
import Icon from 'components/common/Icon';
const defaultInfo = {
	'companyName':'DIAMANTAIRE',
	'tabs':[
		{
			'name':'Career',
			'icon':'line-chart'
		},
		{
			'name':'Communities',
			'icon':'users'
		},
		{
			'name':'Contact Us',
			'icon':'mobile'
		}
	],
	'buttons':[
				{
					'name':'Sign Up',
					'fill':false,
					'pathTo':PATHS.signup
				},
				{
					'name':'Sign In',
					'fill':true,
					'pathTo':PATHS.signin
				}
	],
	'profileActions':[
				{
					'title':'Message',
					'icon':'comments'
				},
				{
					'title':'Notifications',
					'icon':'bell'
				},
				{
					'name':'Saurabh',
					'isDropDown':true,
					'dropDownContent':[
										{
											'name':'content-1',
											'link':'/path'
										}
									]
				}
	]
}
class Header extends Component{
	constructor(props){
		super(props);
		this.state={
			'opacity':'low-opacity'
		}
		this.scrollEvent = this.scrollEvent.bind(this);
	}
	componentDidMount(){
		const {headerColor} = this.props;
		if(headerColor !== 'active'){
			document.addEventListener('scroll',this.scrollEvent,false)
		}else{
			this.setState(Object.assign({},this.state,{'opacity':''}));
		}
	}
	componentWillUnmount(){
		document.removeEventListener('scroll',this.scrollEvent,false);
	}
	scrollEvent(){
		if(window.scrollY <= 120){
			this.setState(Object.assign({},this.state,{'opacity':'low-opacity'}));
		}else{
			this.setState(Object.assign({},this.state,{'opacity':''}));
		}
	}
	render(){
		return(
				<div className={`main-header ${this.state.opacity}`}>
					<div className='navigation'></div>
					<Link to={PATHS.root}><div className='logo'>{defaultInfo.companyName}</div></Link>
					<Tabs tabs={defaultInfo.tabs}></Tabs>
					{
						(()=>{
							if(this.props.setting === 'profile'){
								return <ProfileActions profileActions={defaultInfo.profileActions} />
							}else{
								return <ButtonsContainer buttons={defaultInfo.buttons} />
							}
						})(this)
					}
				</div>
			)
	}
}

const Tabs =(props) =>{
	const tabs = props.tabs;
	return (
		<div className='tabs-container'>
			{
				tabs.map((tab,index)=>{
					return <div key={`tab-${index}`} className='tab'><Icon icon={tab.icon} />{tab.name}</div>
				})
			}
		</div>
	)
}
const ButtonsContainer =(props) =>{
	const buttons = props.buttons;
	return (
		<div className='buttons-container'>
			{
				buttons.map((button,index)=>{
					return <Link key={`button-${index}`} to={`${button.pathTo}`}><div className='button'>{button.name}</div></Link>
				})
			}
		</div>
	)
}
const ProfileActions = (props)=>{
	const profileActions = props.profileActions;
	return (
		<div className='profileActions-container'>
			{
				profileActions.map((profileAction,index)=>{
					if(profileAction.icon){
						return <span className={`profileAction-icon`} key={index}><Icon icon={profileAction.icon} /></span>
					}else{
						return <span className={`profileAction-name`} key={index} >{profileAction.name}</span>
					}
				})
			}
		</div>
	)
}
export default Header;