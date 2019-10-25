import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import {Card, CardSection, Input, Button, Spinner} from "./common";
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {connect} from 'react-redux';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  renderError() {
    if(this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading){
      return <Spinner size="large" />;
    }

    return(
      <Button onPress={this.onButtonPress.bind(this)}>
        Iniciar Sesión
      </Button>
    );
  }

  render() {
    return(
      <View>
        <View style={styles.containerStyle}>
          <Image
            source={require('../images/inmaculada.png')}
            style={styles.imageCIStyle}
            resizeMode="contain"
          />
          <Image
            source={require('../images/lea.png')}
            style={styles.imageLEAStyle}
            resizeMode="contain"
          />
        </View>
        <View style={styles.loginStyle}>
          <Card>
            <CardSection>
              <Input
                placeholder="usuario@ci.edu.pe"
                label="Correo"
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardSection>

            <CardSection>
              <Input
                placeholder="contraseña"
                label="Clave"
                secureTextEntry
                onChangeText={this.onPasswordChange.bind(this)}
                value={this.props.password}
              />
            </CardSection>

            {this.renderError()}

            <CardSection>
              {this.renderButton()}
            </CardSection>
          </Card>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {error, password, email, loading} = auth;
  return {email, password, error, loading};
};

const styles = {
  imageCIStyle:{
    height: 120,
    width: 120,
    flex: 0,
    marginBottom: 10,
    alignSelf: 'flex-start'
  },
  imageLEAStyle:{
    height: 120,
    width: 120,
    flex: 0,
    alignSelf: 'flex-end'
  },
  containerStyle:{
    flexDirection:'row',
    justifyContent: 'space-between',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
  },
  loginStyle:{
    justifyContent: 'center',
    paddingTop: 70
  },
  errorTextStyle:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'red'
  }
}

export default connect (mapStateToProps, {
  emailChanged, passwordChanged, loginUser
}) (LoginForm);
