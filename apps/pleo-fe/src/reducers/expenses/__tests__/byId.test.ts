import { byId } from '../byId';
import { receiveCommentAction, receiveExpensesAction } from '../../../actions/expenses';
import produce from 'immer';
import { ExpensesByIdState } from '../types';
import {
  commentFixture1,
  commentFixture2,
  expensesFixture1,
  expensesFixture2,
} from '../../../tests/fixtures/fixtures';

describe('Expenses byId reducer', () => {
  test('should return the correct initial state', () => {
    // @ts-ignore
    expect(byId(undefined, {})).toEqual({});
  });

  test('should receive new expenses', () => {
    const expenses = expensesFixture1();
    const newExpenses = expensesFixture2();
    let result: ExpensesByIdState = {};
    expect(byId({}, receiveExpensesAction({ expenses, total: expenses.length }))).toEqual(
      (result = produce({} as ExpensesByIdState, draft => {
        expenses.forEach(expense => (draft[expense.id] = expense));
      }))
    );

    expect(byId(result, receiveExpensesAction({ expenses: newExpenses, total: newExpenses.length }))).toEqual(
      produce(result as ExpensesByIdState, draft => {
        newExpenses.forEach(expense => (draft[expense.id] = expense));
      })
    );
  });

  test('should save a new comment', () => {
    const expenses = expensesFixture1();
    const newComment1 = commentFixture1();
    const newComment2 = commentFixture2();
    const state: ExpensesByIdState = byId({}, receiveExpensesAction({ expenses, total: expenses.length }));

    expect(byId(state, receiveCommentAction(newComment1))).toEqual(
      produce(state, draft => {
        draft[newComment1.expenseId].comments.push(newComment1);
      })
    );

    expect(byId(state, receiveCommentAction(newComment2))).toEqual(
      produce(state, draft => {
        draft[newComment2.expenseId].comments.push(newComment2);
      })
    );
  });
});
