import React from 'react';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import Todo from './component/Todo';
import rootReducer from './reducers/rootReducer';

import {
  Text,
  View,
  StyleSheet,

} from 'react-native';

const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => (
  
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;
