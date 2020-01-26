import { Expense } from 'pleo-types';

export interface ExpensesByIdState {
  [expenseId: string]: Expense;
}

export interface ExpensesState {
  byId: ExpensesByIdState;
  allIds: string[];
}

export interface ExpensesByTimestamp {
  [timestamp: number]: Expense[];
}
