import React, {Component} from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import style from 'styles/components/forms.css';

const styles = {
  customWidth: {
    width: 300,
    marginTop: '1em'
  },
  inActive:{
  	color:'#6a6a6a',
  	fontWeight: 100,
  	fontSize: '0.8em'
  }
};
class DropDown extends Component{
	constructor(props) {
	    super(props);
	    this.state = {value: 'default'};
  	}
  	handleChange = (event, index, value) => this.setState({value});
	render(){
		const {dropDownItems,label} = this.props;
		const labelStyle = this.state.value === 'default' ? styles.inActive : '';
		return(
				<DropDownMenu labelStyle={labelStyle} value={this.state.value} onChange={this.handleChange} style={styles.customWidth} autoWidth={false}>
		          <MenuItem disabled={true} className='dropDownElement' value='default' primaryText={label} />
		          {
		          	dropDownItems.map((item)=>{
		          		return <MenuItem className='dropDownElement' value={item.value} primaryText={item.text} />

		          	})
		          }
		        </DropDownMenu>
			)
	}
}

export default DropDown;