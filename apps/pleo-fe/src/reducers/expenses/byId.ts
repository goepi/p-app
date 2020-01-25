import produce, { Draft } from 'immer';
import { ExpensesByIdState } from './types';
import { ExpensesActionTypes, RECEIVE_EXPENSES } from '../../actions/expenses';

export const byId = produce((draft: Draft<ExpensesByIdState>, action: ExpensesActionTypes) => {
  switch (action.type) {
    case RECEIVE_EXPENSES: {
      action.payload.expenses.forEach(expense => {
        draft[expense.id] = expense;
      });
      break;
    }
  }
}, {});
