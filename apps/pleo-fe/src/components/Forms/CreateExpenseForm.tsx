import React from 'react';
import { GeneralInput } from './GeneralInput';
import { CreateExpenseFormStateUpdater } from '../Modals/CreateExpenseModal';
import styled from 'styled-components';
import { TextStrong } from '../Text/TextStrong';
import { AmountInput } from './AmountInput';
import { CommentInputContainer } from '../Comments/CommentInput/CommentInputContainer';
import { CommentList } from '../Comments/CommentList';

interface Props {
  value: string;
  currency: string;
  date: string;
  merchant: string;
  currentComment: string;
  comments: string[];
  updateField: CreateExpenseFormStateUpdater;
  updateComments: (comment: string) => void;
}

const Container = styled.div`
  padding: 30px;
`;

const FormRow = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.div`
  width: 20%;
`;

const Comments = styled.div`
  margin-top: 20px;
`;

export const CreateExpenseForm = (props: Props) => (
  <Container data-cy="createExpenseForm">
    <FormRow>
      <Label>
        <TextStrong text={'Amount'} />
      </Label>
      <AmountInput
        value={props.value}
        currency={props.currency}
        onChangeValue={e => props.updateField('value', e.target.value)}
        onChangeCurrency={e => props.updateField('currency', e.target.value)}
      />
    </FormRow>
    <FormRow>
      <Label>
        <TextStrong text={'Merchant'} />
      </Label>
      <GeneralInput
        value={props.merchant}
        onChange={e => props.updateField('merchant', e.target.value)}
        placeholder={'Where did you spend?'}
      />
    </FormRow>
    <FormRow>
      <Label>
        <TextStrong text={'Date'} />
      </Label>
      <GeneralInput
        type={'datetime-local'}
        value={props.date}
        onChange={e => props.updateField('date', e.target.value)}
      />
    </FormRow>
    <Comments>
      <CommentInputContainer onSubmit={props.updateComments} />
      <CommentList comments={props.comments.map(c => ({ text: c }))} />
    </Comments>
  </Container>
);
