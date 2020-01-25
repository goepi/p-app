import { Expense } from '../expenses';
import { Comment } from '../comments';

export type ExpenseDto = Omit<Expense, 'comments'> & {
  comments: Comment[];
};

export interface AllExpensesDto {
  expenses: ExpenseDto[];
  total: number;
}
