import { 
	EMAIL_CHANGED ,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = { 
	email: '',
	password: '',
	user: null,
	error: '',
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	console.log(action);

	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
			// creating immutable state
			// create a new object and take all properties off existing state object; update email state
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case LOGIN_USER:
			return { ...state, loading: true, error: '' };
		case LOGIN_USER_SUCCESS:
			return { ...state, ...INITIAL_STATE, user: action.payload };
				// cleaning all this up with INITIAL_STATE
				// error: '', 
				// loading: false,
				// // if user leaves form and comes back, email and password will be removed
				// email: '', 
				// password: ''
		case LOGIN_USER_FAIL:
			return { ...state, 
				error: 'Authentication Failed.', 
				password: '', 
				loading: false 
			};
		default:
			return state;
	}
};