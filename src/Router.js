import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Noticias from './components/Noticias';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Iniciar sesión" initial/>
        </Scene>
        <Scene key="main">
          <Scene key="noticeList" component={Noticias} title="Noticias"/>
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
