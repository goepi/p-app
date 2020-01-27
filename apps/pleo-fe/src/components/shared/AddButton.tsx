import React from 'react';
import styled from 'styled-components';
import { lightGray } from '../../styles/colors';

interface Props {
  length?: string;
  fontSize?: string;
  onClick?: () => void;
}

const Container = styled.div<Props>`
  height: ${props => props.length || '50px'};
  width: ${props => props.length || '50px'};
  border-radius: ${props => props.length || '50px'};
  box-shadow: 2px 2px 5px 1px ${lightGray};
  font-size: ${props => props.fontSize || '50px'};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddButton = (props: Props) => (
  <Container length={props.length} fontSize={props.fontSize} onClick={props.onClick}>
    +
  </Container>
);
