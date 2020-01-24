import { combineReducers } from 'redux';
import { expenses } from './expenses';
import { RootState } from './types';

export const root = combineReducers<RootState>({ expenses });