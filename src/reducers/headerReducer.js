import defaultState from 'sources/headerDefault';
import {
	SET_ACTIVE_HEADER,
	GET_ACTIVE_HEADER
} from 'actions/actionType';

export default function headerReducer(state = defaultState,action){
	switch(action.type){
		case SET_ACTIVE_HEADER:
			return Object.assign({},state,action.content)
		case GET_ACTIVE_HEADER:
		default:
			return state;
	}
}