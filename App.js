import React from 'react';
import { Provider, connect } from 'react-redux';
import { LoginScreen } from './screens';
import state from './state';

class App extends React.Component {
  render() {
    return (
      <Provider store={state}>
        <LoginScreen />
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  logged: state.account.logged
});

export default connect(mapStateToProps)(App);
