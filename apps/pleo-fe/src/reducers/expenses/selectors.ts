import { ExpensesState } from './types';
import { ExpenseDto } from 'pleo-types';

export const getAllExpenses = (state: ExpensesState): ExpenseDto[] =>
  state.allIds.map(id => state.byId[id]).sort((a, b) => (a.date < b.date ? -1 : 1));

export const getExpenseById = (state: ExpensesState, id: string): ExpenseDto | undefined => state.byId[id];
