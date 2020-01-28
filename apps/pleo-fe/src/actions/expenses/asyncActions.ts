import { AnyAction, Dispatch } from 'redux';
import {
  requestCreateComment,
  requestCreateExpense,
  requestCreateExpenseReceipt,
  requestDeleteExpense,
  requestGetExpenses,
} from '../../api/expenses';
import { receiveCommentAction, receiveExpenseDeletedAction, receiveExpensesAction } from './syncActions';
import { selectMostRecentExpense } from '../ui/asyncActions';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../reducers/types';
import { NewExpenseDto } from 'pleo-types';

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

export const createExpenseAction = (
  newExpense: NewExpenseDto
): ThunkAction<void, RootState, undefined, AnyAction> => async dispatch => {
  try {
    const expense = await requestCreateExpense(newExpense);
    dispatch(receiveExpensesAction({ expenses: [expense], total: 1 }));
    dispatch(selectMostRecentExpense());
  } catch (e) {
    console.log('Error', e);
  }
};

export const createExpenseReceiptAction = (
  expenseId: string,
  file: File
): ThunkAction<Promise<boolean>, RootState, undefined, AnyAction> => async dispatch => {
  try {
    const expense = await requestCreateExpenseReceipt(expenseId, file);
    dispatch(receiveExpensesAction({ expenses: [expense], total: 1 }));
    return true;
  } catch (e) {
    console.log('Error', e);
    return false;
  }
};
