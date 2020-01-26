import { ExpensesState } from './expenses/types';
import { UiState } from './ui/types';

export interface RootState {
  expenses: ExpensesState;
  ui: UiState;
}
