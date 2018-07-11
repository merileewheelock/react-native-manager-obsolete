import { 
	EMAIL_CHANGED ,
	PASSWORD_CHANGED
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: ''
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);
	
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload }
			// creating immutable state
			// create a new object and take all properties off existing state object; update email state
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload }
		default:
			return state;
	}
};