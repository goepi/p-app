import React from 'react';
import { TextRegular } from '../../Text/TextRegular';
import styled from 'styled-components';
import { getUserFriendlyDateString } from '../../../utils/format';
import { dimGray, lightGray } from '../../../styles/colors';

interface Props {
  timestamp: number;
}

const Container = styled.div`
  width: 100%;
`;

export const DateRow = (props: Props) => (
  <Container>
    <TextRegular text={getUserFriendlyDateString(props.timestamp, false)} color={dimGray} />
  </Container>
);
