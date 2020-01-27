import produce, { Draft } from 'immer';
import { UiState } from './types';
import { RECEIVE_SELECT_EXPENSE_ID } from '../../actions/ui/types';
import { RECEIVE_EXPENSE_DELETED } from '../../actions/expenses';

export const ui = produce(
  (draft: Draft<UiState>, action) => {
    switch (action.type) {
      case RECEIVE_SELECT_EXPENSE_ID: {
        draft.selectedExpenseId = action.payload.expenseId;
        break;
      }
      case RECEIVE_EXPENSE_DELETED: {
        draft.selectedExpenseId = null;
        break;
      }
    }
  },
  { selectedExpenseId: null }
);
