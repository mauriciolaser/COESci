import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm'
import Router from './Router';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { networkInterface } from './config';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyADYLy_PYzvgCSF9Ed3TCRTx912NrmJpq8',
      authDomain: 'comedorci.firebaseapp.com',
      databaseURL: 'https://comedorci.firebaseio.com',
      projectId: 'comedorci',
      storageBucket: 'comedorci.appspot.com',
      messagingSenderId: '392165762525',
      appId: '1:392165762525:web:cc847f7318d5a7cd160234',
      measurementId: 'G-ZS3QZDCD07'
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render () {
    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
          <Router/>
      </Provider>
    );
  }
}

export default App;
