import { AllExpensesDto } from 'pleo-types';
export const RECEIVE_EXPENSES = 'RECEIVE_EXPENSES';

export interface ReceiveExpensesActionType {
  type: typeof RECEIVE_EXPENSES;
  payload: AllExpensesDto;
}

export type ExpensesActionTypes = ReceiveExpensesActionType;
