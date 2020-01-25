import { ExpenseDto } from 'pleo-types';

export interface ExpensesByIdState {
  [expenseId: string]: ExpenseDto;
}

export interface ExpensesState {
  byId: ExpensesByIdState;
  allIds: string[];
}

export interface ExpensesByTimestamp {
  [timestamp: number]: ExpenseDto[];
}
