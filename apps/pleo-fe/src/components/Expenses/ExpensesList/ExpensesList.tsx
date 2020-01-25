import React from 'react';
import { DateRow } from './DateRow';
import { ExpensesByTimestamp } from '../../../reducers/expenses/types';
import { ExpenseRow } from './ExpenseRow';

interface Props {
  expensesByTimestamp: ExpensesByTimestamp;
}

export const ExpensesList = (props: Props) => {
  return (
    <>
      {Object.keys(props.expensesByTimestamp).map(timestamp => (
        <React.Fragment key={timestamp}>
          <DateRow timestamp={parseInt(timestamp)} />
          {props.expensesByTimestamp[parseInt(timestamp)].map(({ user, merchant, amount, comments, id }) => (
            <ExpenseRow key={id} amount={amount} merchant={merchant} comments={comments} user={user} />
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
