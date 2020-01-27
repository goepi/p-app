import React from 'react';
import styled from 'styled-components';
import { deepPink } from '../../styles/colors';

const Container = styled.div<Pick<Props, 'backgroundColor' | 'marginLeft'>>`
  border: 0;
  margin-left: ${props => props.marginLeft || 0};
  padding: 5px 20px;
  border-radius: 30px;
  height: 52px;
  font-size: 15px;
  color: white;
  outline: none;
  box-sizing: border-box;
  background-color: ${props => props.backgroundColor || deepPink()};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  backgroundColor?: string;
  marginLeft?: string;
  text: string;
  onClick: () => void;
}

export const Button = (props: Props) => (
  <Container marginLeft={props.marginLeft} backgroundColor={props.backgroundColor} onClick={props.onClick}>
    {props.text}
  </Container>
);
