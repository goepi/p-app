import React from 'react';
import styled from 'styled-components';
import HeaderSvg from './ExpenseDetailHeader.svg';
import { Avatar } from '../Avatar/Avatar';
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
  bottom: -27px;
  transform: translate(-50%);
  background-color: white;
`;

interface Props {
  merchant: string;
}

export const ExpenseDetailHeader = (props: Props) => (
  <Container>
    <object type="image/svg+xml" width="100%" data={HeaderSvg} />
    <WhiteCircle>
      <Avatar
        length={'50px'}
        fontSize={'30px'}
        text={props.merchant.charAt(0)}
        backgroundColor={brightGreen()}
        textColor={'white'}
      />
    </WhiteCircle>
  </Container>
);
