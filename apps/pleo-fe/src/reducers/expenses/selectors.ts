import { ExpensesState } from './types';
import { Expense } from 'pleo-types';

export const getAllExpenses = (state: ExpensesState): Expense[] =>
  state.allIds.map(id => state.byId[id]).sort((a, b) => (a.date > b.date ? -1 : 1));

export const getExpenseById = (state: ExpensesState, id: string): Expense | undefined => state.byId[id];
