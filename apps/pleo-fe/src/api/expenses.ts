import { ApiRequestError, deleteRequest, getRequest, postRequest } from './index';
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

export const requestCreateExpenseReceipt = async (expenseId: string, file: File) => {
  const fd = new FormData();
  fd.append('receipt', file);

  const response = await fetch(
    // in development we are using webpack-dev-server to proxy our request to avoid CORS
    `${process.env.REACT_APP_BASE_URL}/expenses/${expenseId}/receipts`,
    {
      method: 'POST',
      body: fd,
    }
  );

  if (response.ok) {
    // Type assertion because camelizeKeys returns Object
    return await response.json();
  }

  throw new ApiRequestError(response.status, response.statusText);
};
