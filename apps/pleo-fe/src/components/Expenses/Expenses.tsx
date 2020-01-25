import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { AddButton } from '../shared/AddButton';
import { SearchBar } from '../shared/SearchBar';
import { ExpensesList } from './ExpensesList/ExpensesList';
import { ExpensesByTimestamp } from '../../reducers/expenses/types';

const Container = styled.div``;

interface Props {
  searchInput: string;
  onSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  expensesByTimestamp: ExpensesByTimestamp;
}

export const Expenses = (props: Props) => (
  <Container>
    <AddButton />
    <SearchBar value={props.searchInput} onChange={props.onSearchInput} />
    <ExpensesList expensesByTimestamp={props.expensesByTimestamp} />
  </Container>
);
