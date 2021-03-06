import React from 'react';
import { DateRow } from './DateRow';
import { ExpensesByTimestamp } from '../../../reducers/expenses/types';
import { ExpenseRow } from './ExpenseRow';
import styled from 'styled-components';

interface Props {
  expensesByTimestamp: ExpensesByTimestamp;
  onSelectExpense: (id: string) => void;
}

const Container = styled.div`
  margin: 3em;
`;

export const ExpensesList = (props: Props) => {
  return (
    <>
      {Object.keys(props.expensesByTimestamp).map(timestamp => (
        <Container key={timestamp}>
          <DateRow timestamp={parseInt(timestamp)} />
          {props.expensesByTimestamp[parseInt(timestamp)].map(({ user, merchant, amount, comments, id }) => (
            <ExpenseRow
              key={id}
              amount={amount}
              merchant={merchant}
              comments={comments}
              user={user}
              onSelectExpense={() => props.onSelectExpense(id)}
            />
          ))}
        </Container>
      ))}
    </>
  );
};
