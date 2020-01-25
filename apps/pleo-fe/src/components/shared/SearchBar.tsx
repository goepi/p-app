import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { lightGray } from '../../styles/colors';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = styled.input`
  width: 100%;
  border-bottom: 1px solid ${lightGray};
  border-left: 0;
  border-right: 0;
  border-top: 0;
  outline: none;
  box-sizing: border-box;
`;

export const SearchBar = ({ value, onChange }: Props) => <Input value={value} onChange={onChange} />;
