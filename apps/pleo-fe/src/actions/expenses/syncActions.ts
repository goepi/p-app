import {
  RECEIVE_EXPENSES,
  RECEIVE_COMMENT,
  ReceiveCommentActionType,
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
