import { ExpensesActionTypes, RECEIVE_EXPENSE_DELETED, RECEIVE_EXPENSES } from '../../actions/expenses';

export const allIds = (state: string[] = [], action: ExpensesActionTypes): string[] => {
  switch (action.type) {
    case RECEIVE_EXPENSES: {
      const newState = [...state];
      const set = new Set(state);
      action.payload.expenses.forEach(expense => {
        if (!set.has(expense.id)) {
          set.add(expense.id);
          newState.push(expense.id);
        }
      });
      return newState;
    }
    case RECEIVE_EXPENSE_DELETED: {
      return state.filter(id => id !== action.payload.expenseId);
    }
    default: {
      return state;
    }
  }
};
