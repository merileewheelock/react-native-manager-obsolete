import firebase from 'firebase';
import { 
	EMAIL_CHANGED ,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
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
		// the minute we try to log a user in, we dispatch an action with type LOGIN_USER
		// going to use LOGIN_USER to start spinner
		dispatch({ type: LOGIN_USER });
		// making call to firebase servers for authentication
		firebase.auth().signInWithEmailAndPassword(email, password)
			// .then runs if user successfully logged in
			.then(user => loginUserSuccess(dispatch, user))
			// .catch runs if initial attempt fails, so we attempt to create an account as well
			.catch((error) => {
				console.log(error);
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(user => loginUserSuccess(dispatch, user))
					.catch(() => loginUserFail(dispatch));
			});
	};
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};

const loginUserFail = (dispatch) => {
	dispatch({ type: LOGIN_USER_FAIL });
}


// redux thunk is used to handle any async action creator
// currently using for firebase, but can be used for any ajax request
// npm module: npm install --save redux-thunk