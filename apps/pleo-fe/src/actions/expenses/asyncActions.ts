import { Dispatch } from 'redux';
import { requestCreateComment, requestGetExpenses } from '../../api/expenses';
import { receiveCommentAction, receiveExpensesAction } from './syncActions';

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
