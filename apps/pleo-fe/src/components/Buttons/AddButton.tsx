import React from 'react';
import styled from 'styled-components';
import { funBlue, lightGray } from '../../styles/colors';
import { PlusIcon } from '../Icon/PlusIcon';

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
  cursor: pointer;
`;

export const AddButton = (props: Props) => (
  <Container length={props.length} fontSize={props.fontSize} onClick={props.onClick}>
    <PlusIcon color={funBlue(1)} width={'0.5em'} height={'0.5em'} />
  </Container>
);
