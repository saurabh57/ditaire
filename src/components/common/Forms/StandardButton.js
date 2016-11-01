import React , {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class StandardButton extends Component{
	render(){
		const {fullWidthButtton,label,textTransform,className,buttonStyle,disabled,callback} = this.props;
		const labelStyle ={
			'color':'white',
			'textTransform':textTransform || 'none'
		}
		let _buttonStyle = {};
			switch(buttonStyle){
			case 'small':
				_buttonStyle = {
					height:30,
					minWidth:60
				}
				break;
			case 'medium':
				_buttonStyle = {

				}
				break;
			default:
				_buttonStyle =  {}
			}
		return (
						<RaisedButton
							disabled={disabled || false}
							className={className || ''}
							style={_buttonStyle}
							label={label || 'Default'}
							fullWidth={fullWidthButtton || false}
							backgroundColor={'#00BFA5'}
							labelStyle={labelStyle}
							onClick={callback}
						/>
			)
	}
}

export default StandardButton;
