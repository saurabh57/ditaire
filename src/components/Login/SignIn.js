import React , {Component} from 'react';
import style from 'styles/components/signIn.css';
import {Link} from 'react-router';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import PATHS from 'routes';

class SignIn extends Component{
	render(){
		const {color,fullWidthButtton,linkColor} = this.props;
		const hintStyle ={
			'color':color || 'white',
			'fontWeight':'100',
			'fontSize':'.8em'
		}
		const inputStyle ={
			'color':color || 'white',
			'fontWeight':'100',
			'fontSize':'1em'
		}
		const underlineFocusStyle ={
			'borderColor':'#00BFA5'
		}
		const underlineStyle ={
			'borderColor':color || 'white'
		}
		const labelStyle ={
			'color':'white'
		}
		const modalStyle ={
			'borderColor':color || 'white'
		}
		const linkStyle ={
			color:linkColor || 'white'
		}
		return(
				<div className='sign-in-ui' style={modalStyle}>
					<TextField
					      hintText='Username/Email'
					      hintStyle={hintStyle}
					      inputStyle={inputStyle}
					      underlineStyle={underlineStyle}
					      fullWidth={true}
					      underlineFocusStyle={underlineFocusStyle}
					/>
					<TextField
						  type='password'
					      hintText='Password'
					      hintStyle={hintStyle}
					      inputStyle={inputStyle}
					      underlineStyle={underlineStyle}
					      fullWidth={true}
					      underlineFocusStyle={underlineFocusStyle}
					/>
					<div className='buttons'>
						<RaisedButton
							label='Sign In'
							fullWidth={fullWidthButtton || false}
							backgroundColor={'#00BFA5'}
							labelStyle={labelStyle}
						/>
					</div>
					<div className='links'>
						<Link to={PATHS.signup}><span style={linkStyle}>Create an account</span></Link> | <span style={linkStyle}>Forgot password</span>
					</div>
				</div>
			)
	}
}

export default SignIn;