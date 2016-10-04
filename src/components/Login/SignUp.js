import React , {Component} from 'react';
import style from 'styles/components/signUp.css';
import {InputText,DropDown,StandardButton} from 'components/common/Forms';

const accountType = [
	{
		text:'Individual',
		value:'individual'
	},
	{
		text:'Organizational',
		value:'organizational'
	}
]
const country=[
	{
		text:'India',
		value:'India'
	},
	{
		text:'Japan',
		value:'Japan'
	},
	{
		text:'China',
		value:'China'
	}
]
class SignUp extends Component{
	render(){
		return(
				<div className='sign-up-ui col-lg-6 col-md-8 col-sm-12 margin-auto'>
					<div className='title-container text-center'>Sign Up</div>
					<div className='input-container'>
						<InputItems />
					</div>
					<div className='action-container'>
						<StandardButton  label='Create' />
					</div>
				</div>
			);
	}
}
const InputItems = (props) =>{
	return (
			<div className='row'>
				<div className='col-lg-6 col-md-6 col-sm-6 col-xm-12'>
					<InputText label='Username' 
								color='grey' 
								underlineColor='#d6d6d6' 
								underlineWidth='2px'
								labelColor='#6a6a6a'
								/>
					<InputText label='Email Address'
								type='email'
								color='grey' 
								underlineColor='#d6d6d6' 
								underlineWidth='2px'
								labelColor='#6a6a6a'
								/>
					<InputText label='Password'
								type='password'
								color='grey' 
								underlineColor='#d6d6d6' 
								underlineWidth='2px'
								labelColor='#6a6a6a'
								/>
				</div>
				<div className='col-lg-6 col-md-6 col-sm-6 col-xm-12'>
					<DropDown   dropDownItems={accountType} label='Account type'/>
					<DropDown   dropDownItems={country} label='Country'/>
				</div>
			</div>
		)

}
export default SignUp;