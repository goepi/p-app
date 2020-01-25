import produce, { Draft } from 'immer';
import { ExpensesActionTypes, RECEIVE_EXPENSES } from '../../actions/expenses';

type State = string[];

const initialState: State = [];

export const allIds = produce((draft: Draft<State>, action: ExpensesActionTypes) => {
  switch (action.type) {
    case RECEIVE_EXPENSES: {
      return action.payload.expenses.map(expense => expense.id);
    }
  }
}, initialState);
