import {compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './RootReducer';
import thunkMiddleware from 'redux-thunk';
import reduxMulti from 'redux-multi';

const createAppStore = compose(
	applyMiddleware(thunkMiddleware, reduxMulti)
)(createStore);

export default function configureStore(initialState) {
  const store = createAppStore(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./RootReducer', () => {
      const nextReducer = require('./RootReducer').default
      store.replaceReducer(nextReducer)
    })
  }
  return store
}