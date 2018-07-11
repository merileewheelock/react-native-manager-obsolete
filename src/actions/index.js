import firebase from 'firebase';
import { 
	EMAIL_CHANGED ,
	PASSWORD_CHANGED
} from './types';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	};
};

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	};
};

export const loginUser = ({ email, password }) => {
	return (dispatch) => {
		// making call to firebase servers for authentication
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => {
				// after request is complete, then:
				dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user});
			});
	};
};


// redux thunk is used to handle any async action creator
// currently using for firebase, but can be used for any ajax request
// npm module: npm install --save redux-thunk