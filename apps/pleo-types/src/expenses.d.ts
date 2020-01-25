export interface Expense {
  id: string;
  amount: {
    value: string;
    currency: string;
  };
  date: number;
  merchant: string;
  receipts: any[];
  comments: string[];
  category: string;
  user: {
    first: string;
    last: string;
    email: string;
  };
}
