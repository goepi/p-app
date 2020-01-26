import { Expense } from '../expenses';

export interface AllExpensesDto {
  expenses: Expense[];
  total: number;
}
