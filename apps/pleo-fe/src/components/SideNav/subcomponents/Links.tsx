import React from 'react';
import { NavLink } from 'react-router-dom';
import { TextRegular } from '../../Text/TextRegular';
import styled from 'styled-components';
import { EXPENSES, PROFILE } from '../../../navigation/routes';

type SideNavRoutes = typeof EXPENSES | typeof PROFILE;

interface NavLinkProps {
  to: SideNavRoutes;
  text: string;
}

const Container = styled.div`
  margin-top: 10em;
  width: 100%;
`;

const SideNavLink = (props: NavLinkProps) => (
  <NavLink
    to={props.to}
    style={{
      textDecoration: 'none',
      display: 'block',
      borderLeft: '4px solid',
      borderColor: 'transparent',
      fontFamily: 'roboto-regular',
      paddingTop: 15,
      paddingBottom: 15,
    }}
    activeStyle={{ borderColor: 'red', fontFamily: 'roboto-medium' }}
  >
    <TextRegular marginLeft={'20%'} text={props.text} />
  </NavLink>
);

export const Links = () => {
  return (
    <Container>
      <SideNavLink to={'/expenses'} text={'Expenses'} />
    </Container>
  );
};
