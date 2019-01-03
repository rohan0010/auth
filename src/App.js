import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
            firebase.initializeApp({
            apiKey: 'AIzaSyBQ9zqwLeS1BNZ4-MtNC7XGLzioezyRg28',
            authDomain: 'authentication-57908.firebaseapp.com',
            databaseURL: 'https://authentication-57908.firebaseio.com',
            projectId: 'authentication-57908',
            storageBucket: 'authentication-57908.appspot.com',
            messagingSenderId: '77080117673'
          });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}
export default App;
