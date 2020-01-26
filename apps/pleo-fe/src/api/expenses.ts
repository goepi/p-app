import { deleteRequest, getRequest, postRequest } from './index';
import { AllExpensesDto, Comment } from 'pleo-types';

export const requestGetExpenses = async () => {
  return await getRequest<AllExpensesDto>('/expenses');
};

export const requestCreateComment = async (expenseId: string, comment: string) => {
  return await postRequest<Comment>(`/expenses/${expenseId}/comments`, { comment });
};

export const requestDeleteExpense = async (expenseId: string) => {
  return await deleteRequest(`/expenses/${expenseId}`);
};
