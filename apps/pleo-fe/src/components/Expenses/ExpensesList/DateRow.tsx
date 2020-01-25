import React from 'react';
import { TextRegular } from '../../Text/Text';
import styled from 'styled-components';
import { getUserFriendlyDateString } from '../../../utils/dates';

interface Props {
  timestamp: number;
}

const Container = styled.div`
  width: 100%;
`;

export const DateRow = (props: Props) => (
  <Container>
    <TextRegular text={getUserFriendlyDateString(props.timestamp, false)} />
  </Container>
);
