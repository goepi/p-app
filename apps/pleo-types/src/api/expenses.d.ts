import { Expense } from '../expenses';

export interface AllExpensesDto {
  expenses: Expense[];
  total: number;
}

export interface NewExpenseDto {
  amount: {
    value: string;
    currency: string;
  };
  date: string;
  merchant: string;
  comments: string[];
}
