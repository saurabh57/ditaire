import React ,{Component} from 'react';

const Icon = (props) =>{
	if(!props.icon){
		return null;
	}
	return (
			<i className={`icon fa fa-${props.icon}`}></i>
		)
}

export default Icon;