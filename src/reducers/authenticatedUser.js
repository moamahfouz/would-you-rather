import { SET_AUTHED_USER, RESET_AUTHED_USER } from '../actions/authenticatedUser';

export default function authedUser(state = null, action) {
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.id;
		case RESET_AUTHED_USER:
			return null;
		default:
			return state;
	}
}
