import {
  RECEIVE_COMMENT,
  RECEIVE_EXPENSE_DELETED,
  RECEIVE_EXPENSES,
  ReceiveCommentActionType,
  ReceiveExpenseDeletedActionType,
  ReceiveExpensesActionType,
} from './types';
import { AllExpensesDto, Comment } from 'pleo-types';

export const receiveExpensesAction = (payload: AllExpensesDto): ReceiveExpensesActionType => ({
  type: RECEIVE_EXPENSES,
  payload,
});

export const receiveCommentAction = (payload: Comment): ReceiveCommentActionType => ({
  type: RECEIVE_COMMENT,
  payload,
});

export const receiveExpenseDeletedAction = (payload: string): ReceiveExpenseDeletedActionType => ({
  type: RECEIVE_EXPENSE_DELETED,
  payload: { expenseId: payload },
});
