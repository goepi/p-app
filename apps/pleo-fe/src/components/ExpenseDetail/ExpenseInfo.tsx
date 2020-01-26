import React from 'react';
import { TextRegular } from '../Text/TextRegular';
import styled from 'styled-components';

interface Props {
  merchant: string;
  amount: string;
  dateText: string;
}

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    margin-top: 10px;
  }
`;

export const ExpenseInfo = (props: Props) => (
  <Container>
    <TextRegular text={props.merchant} />
    <TextRegular text={props.amount} />
    <TextRegular text={props.dateText} />
  </Container>
);
