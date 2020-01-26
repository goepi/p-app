import { combineReducers } from 'redux';
import { expenses } from './expenses';
import { RootState } from './types';
import { ui } from './ui';

export const root = combineReducers<RootState>({ expenses, ui });
