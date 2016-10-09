import React , {Component} from 'react';
import TextField from 'material-ui/TextField';

class InputText extends Component{
	render(){
	const {type,color,labelColor,labelFontWeight, fullWidthButtton,underlineColor,underlineWidth,hint,label} = this.props;
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
		'borderColor':underlineColor || color || 'white',
		'borderWidth':underlineWidth || '1px'
	}
	const labelStyle ={
		'color':labelColor || 'white',
		'fontWeight': labelFontWeight || '100',
		'fontSize':'.8em'
	}
	return (
			<TextField
				type={type}
		      	floatingLabelText={label}
		      	hintText={hint}
		      	floatingLabelStyle={labelStyle}
				hintStyle={hintStyle}
				inputStyle={inputStyle}
				underlineStyle={underlineStyle}
				fullWidth={fullWidthButtton || true}
				underlineFocusStyle={underlineFocusStyle}
		    />
		)

	}
}
export default InputText;