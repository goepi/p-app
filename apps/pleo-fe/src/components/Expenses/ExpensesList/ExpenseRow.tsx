import React from 'react';
import styled from 'styled-components';
import { lightBlue, lightGray } from '../../../styles/colors';
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

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 1em;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: calc(1em + 60px);
  flex: 1;
  margin-top: 10px;
`;

const ExpenseInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1em;
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
  border-left: 3px solid ${lightBlue(0.5)};
`;

export const ExpenseRow = (props: Props) => (
  <ColumnContainer onClick={props.onSelectExpense}>
    <RowContainer>
      <UserAvatar firstName={props.user.first} lastName={props.user.last} length={'60px'} />
      <ExpenseInfo>
        <MerchantAndUser>
          <TextStrong text={capitalizeFirstLetters(props.merchant)} />
          <TextRegular text={`${props.user.first} ${props.user.last}`} color={lightGray} />
        </MerchantAndUser>
        <TextRegular text={getFormattedAmountWithCurrencyString(props.amount)} />
      </ExpenseInfo>
    </RowContainer>
    <CommentsContainer>
      <Comments>
        {props.comments.map(comment => (
          <div>
            <TextRegular text={comment.text} marginLeft={'0.8em'} />
          </div>
        ))}
      </Comments>
    </CommentsContainer>
  </ColumnContainer>
);
