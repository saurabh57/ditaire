import React , {Component} from 'react';
import style from 'styles/components/forms.css';
class DropDown extends Component{
	constructor(props){
		super(props)

		this.state={
			value:this.props.name
		}
		this.setValue = this.setValue.bind(this)
	}
	setValue(){
		this.setState({value:this.refs.select.value})
	}
	render(){
		const {onChange,name,enable,isOptGroup,data,selected} = this.props;
		return(
				<div className={`dropDown`}>
	                <span className="custom-select custom-selectDisabledOption">
	                	<span className="custom-selectInner">{this.state.value}</span>
	                </span>
	                <select onChange={this.setValue} disabled={!enable} value={this.state.value} ref="select">
	                	<option value={name} data-id={`_`} disabled>{name}</option>
	                	{data.map(opt => {
		                                return <option key={opt.value} value={`${opt.value}`}>{opt.text}</option>;
		                            })
	                	}
	                </select>
	            </div>
		)
	}
}


const OptionGroup = (props) => {
	const {options , label} = props;
    return (
                <optgroup label={label}>
                	{options.map(opt => {
                        return <option key={opt.id} value={`${opt.id}`} data-id={`${opt.id}`}>{opt.longname || opt.name}</option>;
                    })}
                </optgroup>
    );
};

export default DropDown;