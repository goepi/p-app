import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { SideNav } from '../SideNav/SideNav';
import { ExpensesContainer } from '../Expenses/ExpensesContainer';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Dashboard = () => (
  <Container>
    <SideNav />
    <Route to="/expenses" component={ExpensesContainer} />
  </Container>
);
