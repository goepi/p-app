import Fuse from 'fuse.js';
import { Expense } from 'pleo-types';
import { createSelector } from 'reselect';

const options: Fuse.FuseOptions<Expense> = {
  keys: ['amount.currency', 'merchant', 'comments.text', 'user.first', 'user.last'],
  includeMatches: false,
  includeScore: false,
};

export const filterExpenses = (expenses: Expense[], search: string) => {
  const fuse = new Fuse(expenses, options);
  console.log('Searching for ', search);
  return fuse.search(search);
};

export const filterExpensesBySearch = createSelector(
  (expenses: Expense[], _: string) => expenses,
  (_: Expense[], search: string) => search,
  filterExpenses
);
