import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  marginLeft?: string;
  fontSize?: string;
  fontFamily?: string;
  color?: string;
}

const Text = styled.span<Pick<Props, 'marginLeft' | 'fontSize' | 'fontFamily'>>`
  font-size: ${props => props.fontSize || '1em'};
  margin-left: ${props => props.marginLeft || 0};
  font-family: ${props => props.fontFamily || 'roboto-regular'};
  color: ${props => props.color || 'black'};
`;

export const TextRegular = (props: Props) => <Text {...props}>{props.text}</Text>;
