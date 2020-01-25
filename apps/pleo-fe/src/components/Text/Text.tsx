import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
  marginLeft?: string;
}

const Text = styled.span<Pick<Props, 'marginLeft'>>`
  font-size: 1em;
  margin-left: ${props => props.marginLeft || 0};
`;

export const TextRegular = (props: Props) => <Text marginLeft={props.marginLeft}>{props.text}</Text>;
