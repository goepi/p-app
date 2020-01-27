import React from 'react';
import styled from 'styled-components';
import { AddButton } from '../Buttons/AddButton';
import { SearchBar } from '../Search/SearchBar';
import { ExpensesList } from './ExpensesList/ExpensesList';
import { ExpensesByTimestamp } from '../../reducers/expenses/types';

const Container = styled.div``;

interface Props {
  searchInput: string;
  onSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectExpense: (id: string) => void;
  expensesByTimestamp: ExpensesByTimestamp;
  onToggleCreateExpenseModal: () => void;
}

export const Expenses = (props: Props) => (
  <Container>
    <AddButton onClick={props.onToggleCreateExpenseModal} />
    <SearchBar value={props.searchInput} onChange={props.onSearchInput} />
    <ExpensesList expensesByTimestamp={props.expensesByTimestamp} onSelectExpense={props.onSelectExpense} />
  </Container>
);
