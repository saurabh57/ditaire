import React , {Component} from 'react';
import {Link} from 'react-router';
import style from 'styles/components/header.css';
import PATHS from 'routes';
const defaultInfo = {
	'companyName':'DIAMANTAIRE',
	'tabs':[
		{
			'name':'Career'
		},
		{
			'name':'Communities'
		},
		{
			'name':'Contact Us'
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
					<ButtonsContainer buttons={defaultInfo.buttons}></ButtonsContainer>
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
					return <div key={`tab-${index}`} className='tab'>{tab.name}</div>
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
export default Header;