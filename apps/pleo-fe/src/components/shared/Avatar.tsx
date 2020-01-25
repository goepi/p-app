import React from 'react';
import styled from 'styled-components';

interface Props {
  length: number;
}

const Circle = styled.div<Props>`
  width: ${props => props.length}px;
  height: ${props => props.length}px;
  border-radius: ${props => props.length / 2}px;
  background-color: magenta;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 3em;
`;

export const Avatar = (props: Props) => (
  <Circle length={props.length}>
    <Text>M</Text>
  </Circle>
);
