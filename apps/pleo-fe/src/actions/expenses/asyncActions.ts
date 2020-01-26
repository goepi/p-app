import { AnyAction, Dispatch } from 'redux';
import { requestCreateComment, requestDeleteExpense, requestGetExpenses } from '../../api/expenses';
import { receiveCommentAction, receiveExpenseDeletedAction, receiveExpensesAction } from './syncActions';
import { selectMostRecentExpense } from '../ui/asyncActions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../reducers/types';

export const fetchExpensesAction = (): ThunkAction<
  void,
  RootState,
  undefined,
  AnyAction
> => async dispatch => {
  try {
    const expenses = await requestGetExpenses();
    dispatch(receiveExpensesAction(expenses));
    dispatch(selectMostRecentExpense());
  } catch (e) {
    console.log('Error', e);
  }
};

export const createCommentAction = (
  expenseId: string,
  comment: string
): ThunkAction<void, RootState, undefined, AnyAction> => async dispatch => {
  try {
    const newComment = await requestCreateComment(expenseId, comment);
    dispatch(receiveCommentAction(newComment));
  } catch (e) {
    console.log('Error', e);
  }
};

export const deleteExpenseAction = (
  expenseId: string
): ThunkAction<void, RootState, undefined, AnyAction> => async dispatch => {
  try {
    await requestDeleteExpense(expenseId);
    dispatch(receiveExpenseDeletedAction(expenseId));
    dispatch(selectMostRecentExpense());
  } catch (e) {
    console.log('Error', e);
  }
};
