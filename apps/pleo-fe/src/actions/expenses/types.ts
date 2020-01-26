import { AllExpensesDto, Comment } from 'pleo-types';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export interface ReceiveExpensesActionType {
  type: typeof RECEIVE_EXPENSES;
  payload: AllExpensesDto;
}

export interface ReceiveCommentActionType {
  type: typeof RECEIVE_COMMENT;
  payload: Comment;
}

export type ExpensesActionTypes = ReceiveExpensesActionType | ReceiveCommentActionType;
