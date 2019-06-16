import React from 'react';
import { connect } from 'react-redux';
import { LoginScreen } from './screens';

class Router extends React.Component {
  render() {
    return <LoginScreen />;
  }
}

const mapStateToProps = state => ({
  logged: state.account.logged
});

export default connect(mapStateToProps)(Router);
