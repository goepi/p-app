import React from 'react';
import styled from 'styled-components';
import { AddButton } from '../Buttons/AddButton';
import { SearchBar } from '../Search/SearchBar';
import { ExpensesList } from './ExpensesList/ExpensesList';
import { ExpensesByTimestamp } from '../../reducers/expenses/types';

const Container = styled.div``;

const HeaderContainer = styled.div`
  margin: 3em;
  display: flex;
  flex-direction: column;
`;

const AddButtonContainer = styled.div`
  align-self: flex-end;
`;

interface Props {
  searchInput: string;
  onSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectExpense: (id: string) => void;
  expensesByTimestamp: ExpensesByTimestamp;
  onToggleCreateExpenseModal: () => void;
}

export const Expenses = (props: Props) => (
  <Container>
    <HeaderContainer>
      <AddButtonContainer>
        <AddButton onClick={props.onToggleCreateExpenseModal} />
      </AddButtonContainer>
      <SearchBar value={props.searchInput} onChange={props.onSearchInput} />
    </HeaderContainer>
    <ExpensesList expensesByTimestamp={props.expensesByTimestamp} onSelectExpense={props.onSelectExpense} />
  </Container>
);
