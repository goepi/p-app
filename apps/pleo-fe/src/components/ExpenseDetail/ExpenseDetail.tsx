import React, { useState } from 'react';
import { ExpenseDto } from 'pleo-types';
import { ExpenseDetailHeader } from './ExpenseDetailHeader';
import { ExpenseInfo } from './ExpenseInfo';
import {
  capitalizeFirstLetters,
  getFormattedAmountWithCurrencyString,
  getUserFriendlyDateString,
} from '../../utils/format';
import styled from 'styled-components';
import { TextRegular } from '../Text/TextRegular';
import { UserAvatar } from '../Avatar/UserAvatar';
import { lightGray, whiteSmoke } from '../../styles/colors';
import { CommentIcon } from '../Icon/CommentIcon';
import { CommentInputContainer } from '../CommentInput/CommentInputContainer';

interface Props {
  expense: ExpenseDto | null;
}

interface DetailRowProps {
  clickable?: boolean;
}

const DetailRow = styled.div<DetailRowProps>`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  cursor: ${props => (props.clickable ? 'pointer' : 'none')};
`;

const Container = styled.div`
  border-left: 1px solid ${whiteSmoke};
  height: 100%;
`;

const Details = styled.div`
  margin-top: 3em;
  padding-left: 3em;
  padding-right: 3em;
`;

export const ExpenseDetail = ({ expense }: Props) => {
  const [newComment, setNewComment] = useState(false);

  return (
    <Container>
      {expense ? (
        <>
          <ExpenseDetailHeader merchant={expense.merchant} />
          <ExpenseInfo
            merchant={capitalizeFirstLetters(expense.merchant)}
            amount={getFormattedAmountWithCurrencyString(expense.amount)}
            dateText={getUserFriendlyDateString(expense.date, true)}
          />

          <Details>
            <DetailRow>
              <UserAvatar firstName={expense.user.first} lastName={expense.user.last} />
              <TextRegular text={`${expense.user.first} ${expense.user.last}`} marginLeft={'10px'} />
            </DetailRow>
            <DetailRow clickable={true}>
              <CommentIcon height={'30px'} width={'30px'} color={lightGray} />
              <CommentInputContainer expenseId={expense.id} />
            </DetailRow>
          </Details>
        </>
      ) : null}
    </Container>
  );
};
