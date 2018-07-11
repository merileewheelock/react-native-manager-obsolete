import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; // this is middleware
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: "AIzaSyA8zxXtACpPgipdvFtG9l_6tDXq-1PFjZI",
			authDomain: "manager-bcc27.firebaseapp.com",
			databaseURL: "https://manager-bcc27.firebaseio.com",
			projectId: "manager-bcc27",
			storageBucket: "manager-bcc27.appspot.com",
			messagingSenderId: "786110602153"
		};

		firebase.initializeApp(config);
	}
	render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        // 2nd argument {} is for any initial state to pass to app
        // 3rd argument is a store enhancer

		return (
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)
	}
}

export default App;