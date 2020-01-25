import React from 'react';
import styled from 'styled-components';
import { lightGray } from '../../../styles/colors';
import { Avatar } from '../../shared/Avatar';
import { TextRegular } from '../../Text/Text';
import { Comment } from 'pleo-types';

interface Props {
  merchant: string;
  amount: { value: string; currency: string };
  comments: Comment[];
  user: { first: string; last: string };
}

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  align-items: center;
`;

const Comments = styled.div`
  border-left: 4px solid blue;
`;

export const ExpenseRow = (props: Props) => (
  <RowContainer>
    <Avatar
      backgroundColor={lightGray}
      length={'30px'}
      text={`${props.user.first.charAt(0)} ${props.user.last.charAt(0)}`}
      fontSize={'10px'}
    />
    <RightContainer>
      <ExpenseInfo>
        <MerchantAndUser>
          <TextRegular text={props.merchant} />
          <TextRegular text={`${props.user.first} ${props.user.last}`} />
        </MerchantAndUser>
        <TextRegular
          text={new Intl.NumberFormat('ja-JP', { style: 'currency', currency: props.amount.currency }).format(
            parseInt(props.amount.value)
          )}
        />
      </ExpenseInfo>
      <Comments>
        {props.comments.map(comment => (
          <TextRegular text={comment.text} />
        ))}
      </Comments>
    </RightContainer>
  </RowContainer>
);
