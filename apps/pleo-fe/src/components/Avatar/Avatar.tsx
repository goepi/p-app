import React from 'react';
import styled from 'styled-components';
import { TextRegular } from '../Text/TextRegular';

interface Props {
  length: string;
  text: string;
  backgroundColor?: string;
  fontSize?: string;
  textColor?: string;
}

const Circle = styled.div<Pick<Props, 'length' | 'backgroundColor'>>`
  width: ${props => props.length};
  height: ${props => props.length};
  border-radius: ${props => props.length};
  background-color: ${props => props.backgroundColor || 'magenta'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Avatar = (props: Props) => (
  <Circle length={props.length} backgroundColor={props.backgroundColor}>
    <TextRegular text={props.text} fontSize={props.fontSize || '3em'} color={props.textColor || 'black'} />
  </Circle>
);
