import { combineReducers } from 'redux';
import { byId } from './byId';
import { allIds } from './allIds';
import { ExpensesState } from './types';

export const expenses = combineReducers<ExpensesState>({ byId, allIds });
