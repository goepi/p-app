import React from 'react';
import styled from 'styled-components';
import HeaderSvg from './ExpenseDetailHeader.svg';
import { Avatar } from '../shared/Avatar';
import { brightGreen } from '../../styles/colors';

const Container = styled.div`
  position: relative;
  border-bottom: ;
  width: 100%;
`;

const WhiteCircle = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: -50%;
  transform: translate(-50%, -35%);
  background-color: white;
`;

export const ExpenseDetailHeader = () => (
  <Container>
    <object type="image/svg+xml" width="100%" data={HeaderSvg} />
    <WhiteCircle>
      <Avatar length={'50px'} fontSize={'30px'} text={'A'} backgroundColor={brightGreen()} />
    </WhiteCircle>
  </Container>
);
