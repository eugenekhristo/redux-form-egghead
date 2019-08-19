import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import RegisterFormContainer from './App';

const rootReducer = combineReducers({
  form: formReducer
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <RegisterFormContainer />
  </Provider>,
  document.getElementById('root')
);
