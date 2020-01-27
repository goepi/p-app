import React from 'react';
import { GeneralInput } from './GeneralInput';
import { CreateExpenseFormStateUpdater } from '../Modals/CreateExpenseModalContainer';
import styled from 'styled-components';
import { TextStrong } from '../Text/TextStrong';
import { AmountInput } from './AmountInput';
import { CommentInputContainer } from '../CommentInput/CommentInputContainer';

interface Props {
  value: string;
  currency: string;
  date: string;
  merchant: string;
  currentComment: string;
  // comments: string[]
  updateField: CreateExpenseFormStateUpdater;
}

const Container = styled.div`
  padding: 20px;
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

export const CreateExpenseForm = (props: Props) => (
  <Container>
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
      <GeneralInput value={props.merchant} onChange={e => props.updateField('merchant', e.target.value)} />
    </FormRow>
    <FormRow>
      <Label>
        <TextStrong text={'Date'} />
      </Label>
      <GeneralInput
        type={'date'}
        value={props.date}
        onChange={e => props.updateField('date', e.target.value)}
      />
    </FormRow>
  </Container>
);
