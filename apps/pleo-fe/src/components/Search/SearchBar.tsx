import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { lightGray } from '../../styles/colors';
import { SearchIcon } from '../Icon/SearchIcon';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${lightGray};
  border-left: 0;
  border-right: 0;
  border-top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  margin-left: 10px;
  width: 100%;
  border: 0;
  outline: none;
  flex: 1;
`;

export const SearchBar = ({ value, onChange }: Props) => (
  <Container>
    <SearchIcon color={lightGray} />
    <Input value={value} onChange={onChange} placeholder={'Search'} />
  </Container>
);
