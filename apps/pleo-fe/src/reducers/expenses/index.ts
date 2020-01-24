import { combineReducers } from 'redux';
import { byId } from './byId';
import { allIds } from './allIds';

export const expenses = combineReducers({ byId, allIds });
