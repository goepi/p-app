import { Comment } from './comments';

export interface Expense {
  id: string;
  amount: {
    value: string;
    currency: string;
  };
  date: number;
  merchant: string;
  receipts: any[];
  comments: Comment[];
  category: string;
  user: {
    first: string;
    last: string;
    email: string;
  };
}
