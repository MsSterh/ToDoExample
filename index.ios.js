import React                 from 'react';
import { AppRegistry }       from 'react-native';
import { createStore,
         combineReducers }   from 'redux'
import { Provider }          from 'react-redux'
import userReducer           from './reducers/users'
import Login                 from './components/login'

const store = createStore(combineReducers({userReducer}))

const ReduxApp = () => (
  <Provider store={store}>
    <Login />
  </Provider>
)

AppRegistry.registerComponent('ToDoExample', () => ReduxApp);
