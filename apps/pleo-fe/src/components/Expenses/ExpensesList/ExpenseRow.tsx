import React from 'react';
import styled from 'styled-components';
import { lightGray } from '../../../styles/colors';
import { Avatar } from '../../Avatar/Avatar';
import { TextRegular } from '../../Text/TextRegular';
import { Comment } from 'pleo-types';
import { capitalizeFirstLetters, getFormattedAmountWithCurrencyString } from '../../../utils/format';
import { UserAvatar } from '../../Avatar/UserAvatar';
import { TextStrong } from '../../Text/TextStrong';

interface Props {
  merchant: string;
  amount: { value: string; currency: string };
  comments: Comment[];
  user: { first: string; last: string };
  onSelectExpense: () => void;
}

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin-top: 1em;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  flex: 1;
`;

const ExpenseInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MerchantAndUser = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  * {
    margin-top: 0.4em;
  }
`;

const Comments = styled.div`
  border-left: 4px solid blue;
`;

export const ExpenseRow = (props: Props) => (
  <RowContainer onClick={props.onSelectExpense}>
    <UserAvatar firstName={props.user.first} lastName={props.user.last} length={'60px'} />
    <RightContainer>
      <ExpenseInfo>
        <MerchantAndUser>
          <TextStrong text={capitalizeFirstLetters(props.merchant)} />
          <TextRegular text={`${props.user.first} ${props.user.last}`} color={lightGray} />
        </MerchantAndUser>
        <TextRegular text={getFormattedAmountWithCurrencyString(props.amount)} />
      </ExpenseInfo>
      <Comments>
        {props.comments.map(comment => (
          <TextRegular text={comment.text} />
        ))}
      </Comments>
    </RightContainer>
  </RowContainer>
);
