import { RECEIVE_SELECT_EXPENSE_ID, ReceiveSelectExpenseIdActionType } from './types';

export const receiveSelectExpenseIdAction = (expenseId: string): ReceiveSelectExpenseIdActionType => ({
  type: RECEIVE_SELECT_EXPENSE_ID,
  payload: { expenseId },
});
