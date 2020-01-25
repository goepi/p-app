import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  marginLeft?: string;
  fontSize?: string;
}

const Text = styled.span<Pick<Props, 'marginLeft' | 'fontSize'>>`
  font-size: ${props => props.fontSize || '1em'};
  margin-left: ${props => props.marginLeft || 0};
`;

export const TextRegular = (props: Props) => (
  <Text marginLeft={props.marginLeft} fontSize={props.fontSize}>
    {props.text}
  </Text>
);
