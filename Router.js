import React from 'react';
import { connect } from 'react-redux';
import { LoginScreen, BrowserScreen } from './screens';

class Router extends React.Component {
  render() {
    return this.props.logged ? <BrowserScreen /> : <LoginScreen />;
  }
}

const mapStateToProps = state => ({
  logged: state.account.loggedIn
});

export default connect(mapStateToProps)(Router);
