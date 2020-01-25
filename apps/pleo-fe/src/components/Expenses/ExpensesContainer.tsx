import React from 'react';
import { Expenses } from './Expenses';
import styled from 'styled-components';
import { ExpenseDetail } from '../ExpenseDetail/ExpenseDetail';

interface Props {
  flex: number;
}

const Container = styled.div<Props>`
  flex: ${props => props.flex};
  height: 100%;
`;

export class ExpensesContainer extends React.PureComponent {
  public render() {
    return (
      <>
        <Container flex={3}>
          <Expenses />
        </Container>
        <Container flex={2}>
          <ExpenseDetail />
        </Container>
      </>
    );
  }
}
