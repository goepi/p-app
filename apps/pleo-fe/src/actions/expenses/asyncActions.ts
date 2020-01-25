import { Dispatch } from 'redux';
import { requestGetExpenses } from '../../api/expenses';
import { receiveExpensesAction } from './syncActions';

export const fetchExpensesAction = () => async (dispatch: Dispatch) => {
  try {
    const expenses = await requestGetExpenses();

    dispatch(receiveExpensesAction(expenses));
  } catch (e) {
    console.log('Error', e);
  }
};
