import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colorPumpkin } from '../styles';
import logo from '../assets/logo.png';

export default class BrowserScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>BrowserScreen</Text>
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
  }
});
