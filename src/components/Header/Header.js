import React , {Component} from 'react';
import style from 'styles/components/header.css';
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
					'fill':false
				},
				{
					'name':'Sign In',
					'fill':true
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
		document.addEventListener('scroll',this.scrollEvent,false)
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
					<div className='logo'>{defaultInfo.companyName}</div>
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
					return <div key={`button-${index}`} className='button'>{button.name}</div>
				})
			}
		</div>
	)
}
export default Header;