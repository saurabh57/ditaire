import React ,{Component} from 'react';
import {StandardButton} from 'components/common/Forms';
import styles from 'styles/components/addPost.css';

class AddPost extends Component{
	constructor(){
		super();
	}
	render(){
		return (
				<div className='addPost-container'>
					<textarea placeholder='Add post'></textarea>
					<div className='action-container'>
							<StandardButton  className='standardButton button-small' label='Post' buttonStyle='small'></StandardButton>
					</div>
				</div>
			)
	}
}

export default AddPost;