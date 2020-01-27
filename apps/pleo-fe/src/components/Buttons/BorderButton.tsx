import React from 'react';
import styled from 'styled-components';

const Button = styled.div<Pick<Props, 'borderColor'>>`
  border: 1px solid;
  padding: 5px 20px;
  border-color: ${props => props.borderColor || 'rgb(204, 204, 204)'};
  
  border-radius: 30px;
  height: 52px;
  font-size: 15px;
  color: rgb(204, 204, 204)
  outline: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  borderColor?: string;
  text: string;
  onClick: () => void;
}

export const BorderButton = (props: Props) => <Button onClick={props.onClick}>{props.text}</Button>;
