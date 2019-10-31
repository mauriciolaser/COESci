import React from 'react';
import {Image} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import NewsDetail from './components/NewsDetail';
import Comedor from './components/Comedor';
import User from './components/User';

const TabIconHome=({ selected }) => {
  return(
    <Image
    source={selected ? require('./images/home.png') : require('./images/homeSelected.png')}
    style={styles.tabIconStyle}
    />
  );
};

const TabIconComedor=({ selected }) => {
  return(
    <Image
    source={selected ? require('./images/comedor.png') : require('./images/comedorNegro.png')}
    style={styles.tabIconStyle}
    />
  );
};

const TabIconUser=({ selected }) => {
  return(
    <Image
    source={selected ? require('./images/user.png') : require('./images/userNegro.png')}
    style={styles.tabIconStyleUser}
    />
  );
};

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Iniciar sesión" initial/>
        </Scene>
        <Scene key="main">
          <Scene
            key="tabbar"
            tabs
            tabBarStyle={styles.tabStyle}
            hideNavBar
            >
            <Scene key="home" title="Noticias" icon={TabIconHome}>
              <Scene key="newsDetail" component={NewsDetail} title="Noticias" initial/>
            </Scene>

            <Scene key="comedor" title="Comedor" icon={TabIconComedor}>
              <Scene key="menu" component={Comedor} title="Comedor"/>
            </Scene>

            <Scene key="user" title="Usuario" icon={TabIconUser}>
              <Scene key="usuario" component={User} title="Usuario"/>
            </Scene>

          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
};

const styles={
  tabIconStyle:{
    height: 32,
    width: 32
  },
  tabIconStyleUser:{
    height: 32,
    width: 31
  },
  tabStyle:{
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
  }
}

export default RouterComponent;
