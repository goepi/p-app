import { deleteRequest, getRequest, postRequest } from './index';
import { AllExpensesDto, Comment, Expense, NewExpenseDto } from 'pleo-types';

export const requestGetExpenses = async () => {
  return await getRequest<AllExpensesDto>('/expenses');
};

export const requestDeleteExpense = async (expenseId: string) => {
  return await deleteRequest(`/expenses/${expenseId}`);
};

export const requestCreateExpense = async (newExpense: NewExpenseDto) => {
  return await postRequest<Expense>('/expenses', newExpense);
};

export const requestCreateComment = async (expenseId: string, comment: string) => {
  return await postRequest<Comment>(`/expenses/${expenseId}/comments`, { comment });
};
