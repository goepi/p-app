import React from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input = styled.input`
  border: 1px solid rgb(204, 204, 204);
  padding: 5px 20px;
  border-radius: 30px;
  height: 52px;
  flex: 1;
  font-size: 15px;
  color: rgb(68, 68, 68);
  outline: none;
  box-sizing: border-box;
`;

export const GeneralInput = (props: Props) => (
  <Input type={props.type || 'text'} value={props.value} onChange={props.onChange} />
);
