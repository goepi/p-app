import { UiState } from './types';

export const getSelectedExpenseId = (state: UiState): string | null => state.selectedExpenseId;
