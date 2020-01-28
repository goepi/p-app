import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { SideNav } from '../SideNav/SideNav';
import { ExpensesContainer } from '../Expenses/ExpensesContainer';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 5;
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Dashboard = () => (
  <Container>
    <SideNav />
    <MainContent data-cy="mainContent">
      <Route path="/expenses" component={ExpensesContainer} />
    </MainContent>
  </Container>
);
