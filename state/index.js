import { combineReducers, createStore } from 'redux';

const accountReducerInitialState = {
  loggedIn: false
};

const accountReducer = (state = accountReducerInitialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  account: accountReducer
});

export default createStore(rootReducer);
