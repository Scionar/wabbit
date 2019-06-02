import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image, Button } from 'react-native';
import { textInput, colorPumpkin, colorFire } from '../styles';
import logo from '../assets/logo.png';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} resizeMode="contain" style={styles.logo} />

        <TextInput
          style={styles.usernameField}
          textContentType="username"
          placeholder="Username"
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />

        <TextInput
          style={styles.passwordField}
          textContentType="password"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />

        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onSubmit}
            title="Hop in"
            color={colorFire}
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPumpkin,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 300,
    width: 200
  },
  usernameField: {
    ...textInput,
    marginTop: 25,
    width: 200
  },
  passwordField: {
    ...textInput,
    marginTop: 20,
    width: 200
  },
  buttonContainer: {
    marginTop: 20
  }
});
