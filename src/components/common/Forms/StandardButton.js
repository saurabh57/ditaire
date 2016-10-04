import React , {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class StandardButton extends Component{
	render(){
		const {fullWidthButtton,label,textTransform} = this.props;
		const labelStyle ={
			'color':'white',
			'textTransform':textTransform || 'none'
		}
		return (
						<RaisedButton
							label={label || 'Default'}
							fullWidth={fullWidthButtton || false}
							backgroundColor={'#00BFA5'}
							labelStyle={labelStyle}
						/>
			)
	}
}

export default StandardButton;
