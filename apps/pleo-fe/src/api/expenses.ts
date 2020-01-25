import { getRequest } from './index';
import { AllExpensesDto } from 'pleo-types';

export const requestGetExpenses = async () => {
  return await getRequest<AllExpensesDto>('/expenses');
};
