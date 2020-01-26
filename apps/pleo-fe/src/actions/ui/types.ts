export const RECEIVE_SELECT_EXPENSE_ID = 'RECEIVE_SELECT_EXPENSE_ID';

export interface ReceiveSelectExpenseIdActionType {
  type: typeof RECEIVE_SELECT_EXPENSE_ID;
  payload: { expenseId: string };
}
