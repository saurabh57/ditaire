import React , {Component} from 'react';
import style from 'styles/components/signIn.css';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class SignIn extends Component{
	render(){
		const hintStyle ={
			'color':'#00BFA5',
			'fontWeight':'100',
			'fontSize':'.8em'
		}
		const inputStyle ={
			'color':'white',
			'fontWeight':'100',
			'fontSize':'1em'
		}
		const underlineFocusStyle ={
			'borderColor':'white'
		}
		const underlineStyle ={
			'borderColor':'#00BFA5'
		}
		const labelStyle ={
			'color':'white'
		}
		return(
				<div className='sign-in-ui'>
					<TextField
					      hintText='Username/Email'
					      hintStyle={hintStyle}
					      inputStyle={inputStyle}
					      underlineStyle={underlineStyle}
					      underlineFocusStyle={underlineFocusStyle}
					/>
					<TextField
						  type='password'
					      hintText='Password'
					      hintStyle={hintStyle}
					      inputStyle={inputStyle}
					      underlineStyle={underlineStyle}
					      underlineFocusStyle={underlineFocusStyle}
					/>
					<div className='buttons'>
						<RaisedButton
							label='Sign In'
							fullWidth={false}
							backgroundColor={'#00BFA5'}
							labelStyle={labelStyle}
						/>
					</div>
					<div className='links'>
						<span>Create account</span> | <span>Forgot password</span>
					</div>
				</div>
			)
	}
}

export default SignIn;