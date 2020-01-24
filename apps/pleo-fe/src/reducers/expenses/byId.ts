import produce, { Draft } from 'immer';
import { ExpensesByIdState } from './types';

export const byId = produce((draft: Draft<ExpensesByIdState>, action) => {
  switch (action.type) {
    default: {
    }
  }
}, {});
