import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { root } from '../reducers';
import thunkMiddleware from 'redux-thunk';
import { RootState } from '../reducers/types';

export const configureStore = (preloadedState?: RootState) =>
  createStore(root, preloadedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
