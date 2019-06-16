import React from 'react';
import { Provider, connect } from 'react-redux';
import { LoginScreen } from './screens';
import Router from './Router';
import state from './state';

class App extends React.Component {
  render() {
    return (
      <Provider store={state}>
        <Router />
      </Provider>
    );
  }
}

export default App;
