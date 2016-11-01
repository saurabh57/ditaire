import React ,{Component} from 'react';
import {StandardButton} from 'components/common/Forms';
import styles from 'styles/components/addPost.css';

class AddPost extends Component{
	constructor(){
		super();
		this.state = {
			postButtonDisabled:true,
			post:''
		}
		this.onKeyup = this.onKeyup.bind(this);
		this.addPost = this.addPost.bind(this);
	}
	onKeyup(evt){
		if(evt.target.value.trim() !== ''){
			this.setState({postButtonDisabled:false,post:evt.target.value.trim()})
		}else{
			this.setState({postButtonDisabled:true})
		}
		
	}
	addPost(){
		const {addPostInFeeds} = this.props; 
		addPostInFeeds(this.state.post);
		this.setState({postButtonDisabled:true,post:''});
	}
	render(){
		return (
				<div className='addPost-container'>
					<textarea placeholder='Add post' onKeyUp={this.onKeyup} defaultValue={this.state.post}></textarea>
					<div className='action-container'>
							<StandardButton  
								className='standardButton' 
								disabled={this.state.postButtonDisabled}
								label='Post' 
								buttonStyle='small'
								callback={this.addPost} />
					</div>
				</div>
			)
	}
}

export default AddPost;