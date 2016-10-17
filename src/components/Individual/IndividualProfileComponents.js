import React,{Component} from 'react';
import styles from 'styles/components/header.css'
class IndividualProfileComponents extends Component{
	render(){
		return (
				<div className='row'>
					<div className='transparentComponent col-lg-3 col-md-3'></div>
					<div className='component mid-container col-lg-6 col-md-6'></div>
					<div className='transparentComponent col-lg-3 col-md-3'></div>
				</div>
			)
	}
}

export default IndividualProfileComponents;