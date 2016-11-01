import defaultState from 'sources/feedsDefault'
import {
	ADD_POSTS_IN_FEED,
	SET_ALL_FEEDS,
	GET_ALL_FEEDS
} from 'actions/actionType';

export default function feedsReducer(state = defaultState,action){
	switch(action.type){
		case ADD_POSTS_IN_FEED:
			let posts = Object.assign([],state.posts);
				posts = posts.concat(action.content.posts);
			return Object.assign({},state,{posts})
		case SET_ALL_FEEDS:
			return Object.assign({},state,action.content)
		case GET_ALL_FEEDS:
		default:
			return state;
	}
}