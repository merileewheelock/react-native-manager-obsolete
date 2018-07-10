import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		)
	}
}

export default App;