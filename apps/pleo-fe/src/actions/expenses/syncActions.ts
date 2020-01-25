import { RECEIVE_EXPENSES, ReceiveExpensesActionType } from './types';
import { AllExpensesDto } from 'pleo-types';

export const receiveExpensesAction = (payload: AllExpensesDto): ReceiveExpensesActionType => ({
  type: RECEIVE_EXPENSES,
  payload,
});
