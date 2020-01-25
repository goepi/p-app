import { RootState } from './types';
import * as expensesSelectors from './expenses/selectors';
import { ExpensesByTimestamp } from './expenses/types';
import { ExpenseDto } from 'pleo-types';

export const getAllExpenses = (state: RootState) => expensesSelectors.getAllExpenses(state.expenses);

export const getExpensesByTimestamp = (state: RootState) => {
  const allExpenses = getAllExpenses(state);

  const expensesByTimestamp: ExpensesByTimestamp = {};

  allExpenses.forEach((expense: ExpenseDto) => {
    if (expensesByTimestamp[expense.date]) {
      expensesByTimestamp[expense.date].push(expense);
    } else {
      expensesByTimestamp[expense.date] = [expense];
    }
  });

  return expensesByTimestamp;
};

export const getExpenseById = (state: RootState, id: string | null): ExpenseDto | undefined => {
  if (id === null) {
    return undefined;
  }
  expensesSelectors.getExpenseById(state.expenses, id);
};
