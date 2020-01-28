import { RootState } from './types';
import * as expensesSelectors from './expenses/selectors';
import * as uiSelectors from './ui/selectors';
import { Expense } from 'pleo-types';

export const getAllExpenses = (state: RootState) => expensesSelectors.getAllExpenses(state.expenses);

export const getExpenseById = (state: RootState, id: string | null): Expense | undefined => {
  if (id === null) {
    return undefined;
  }
  return expensesSelectors.getExpenseById(state.expenses, id);
};

export const getSelectedExpense = (state: RootState): Expense | null => {
  const expenseId = uiSelectors.getSelectedExpenseId(state.ui);

  if (expenseId) {
    return expensesSelectors.getExpenseById(state.expenses, expenseId) || null;
  }
  return null;
};

export const getSelectedExpenseId = (state: RootState): string | null =>
  uiSelectors.getSelectedExpenseId(state.ui);
