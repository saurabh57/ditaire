import {
	ADD_POSTS_IN_FEED,
	SET_ALL_FEEDS,
	GET_ALL_FEEDS
} from 'actions/actionType';

export function addPostInFeeds(dispatch,posts) {
	dispatch({type:ADD_POSTS_IN_FEED,content:{posts}});
}
export function fetchAllPosts(dispatch) {
	//dispatch({type:SET_ALL_FEEDS,content:{feeds:feeds}});
}