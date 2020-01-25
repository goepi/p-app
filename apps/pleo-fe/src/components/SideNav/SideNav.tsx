import React from 'react';
import styled from 'styled-components';
import { whiteSmoke } from '../../styles/colors';
import { UserInfo } from './subcomponents/UserInfo';
import { Logo } from './subcomponents/Logo';
import { Links } from './subcomponents/Links';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${whiteSmoke};
  height: 100%;
  align-items: center;
  padding-top: 20px;
`;

export const SideNav = () => (
  <Container>
    <Logo height={35} />
    <UserInfo marginTop={30} />
    <Links />
  </Container>
);
