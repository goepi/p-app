import React from 'react';
import styled from 'styled-components';
import { currencyCodes } from '../../constants/currencyCodes';

interface Props {
  value: string;
  currency: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCurrency: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ValueInput = styled.input`
  border: 1px solid rgb(204, 204, 204);
  padding: 5px 20px;
  height: 52px;
  flex: 1;
  font-size: 15px;
  color: rgb(68, 68, 68);
  outline: none;
  box-sizing: border-box;
  flex: 2;
  border-radius: 30px 0 0 30px;
`;

const CurrencySelect = styled.select`
  border: 0;
  outline: none;
  background-color: white;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const SelectContainer = styled.div`
  border: 1px solid rgb(204, 204, 204);
  border-left-width: 0;
  border-radius: 0 30px 30px 0;
  height: 52px;
  flex: 1;
  padding: 5px 20px;
  font-size: 15px;
  color: rgb(68, 68, 68);
  outline: none;
  box-sizing: border-box;
  background-color: white;
`;

export const AmountInput = (props: Props) => (
  <Container>
    <ValueInput type="number" value={props.value} onChange={props.onChangeValue} />
    <SelectContainer>
      <CurrencySelect value={props.currency} onChange={props.onChangeCurrency}>
        {currencyCodes.map(cc => (
          <option key={cc} value={cc}>
            {cc}
          </option>
        ))}
      </CurrencySelect>
    </SelectContainer>
  </Container>
);
