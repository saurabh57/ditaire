import {
	SET_ACTIVE_HEADER,
	GET_ACTIVE_HEADER
} from './actionTypes';

export function setActiveHeader(content){
	return {
		type:SET_ACTIVE_HEADER,
		content
	}
}
export function getActiveHeader(){
	return {
		type:SET_ACTIVE_HEADER
	}
}