import { combineReducers, createStore } from 'redux';

const accountReducerInitialState = {
  loggedIn: false
};

const accountReducer = (state = accountReducerInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer
});

export default createStore(rootReducer);
