import React from 'react';
import { ExpenseDto } from 'pleo-types';
import { ExpenseDetailHeader } from './ExpenseDetailHeader';

interface Props {
  expense: ExpenseDto | null;
}

export const ExpenseDetail = (props: Props) => <ExpenseDetailHeader />;
