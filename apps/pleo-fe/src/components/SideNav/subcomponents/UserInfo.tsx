import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../../Avatar/Avatar';

interface Props {
  marginTop?: number;
}

const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${props => (props.marginTop ? `margin-top: ${props.marginTop}px` : null)};
`;

export const UserInfo = (props: Props) => (
  <Container marginTop={props.marginTop}>
    <Avatar length={'75px'} text={'M'} textColor={'white'} />
  </Container>
);
