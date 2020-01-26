import { AnyAction, Dispatch } from 'redux';
import { getAllExpenses } from '../../reducers/selectors';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../../reducers/types';
import { receiveSelectExpenseIdAction } from './syncActions';

export const selectMostRecentExpense = (): ThunkAction<void, RootState, undefined, AnyAction> => async (
  dispatch: Dispatch,
  getState
) => {
  const mostRecentExpense = getAllExpenses(getState())[0];

  if (mostRecentExpense) {
    dispatch(receiveSelectExpenseIdAction(mostRecentExpense.id));
  }
};
