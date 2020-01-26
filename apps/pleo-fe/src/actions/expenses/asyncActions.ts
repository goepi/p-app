import { Dispatch } from 'redux';
import { requestCreateComment, requestDeleteExpense, requestGetExpenses } from '../../api/expenses';
import { receiveCommentAction, receiveExpenseDeletedAction, receiveExpensesAction } from './syncActions';

export const fetchExpensesAction = () => async (dispatch: Dispatch) => {
  try {
    const expenses = await requestGetExpenses();
    dispatch(receiveExpensesAction(expenses));
  } catch (e) {
    console.log('Error', e);
  }
};

export const createCommentAction = (expenseId: string, comment: string) => async (dispatch: Dispatch) => {
  try {
    const newComment = await requestCreateComment(expenseId, comment);
    dispatch(receiveCommentAction(newComment));
  } catch (e) {
    console.log('Error', e);
  }
};

export const deleteExpenseAction = (expenseId: string) => async (dispatch: Dispatch) => {
  try {
    await requestDeleteExpense(expenseId);
    dispatch(receiveExpenseDeletedAction(expenseId));
  } catch (e) {
    console.log('Error', e);
  }
};
