import React from 'react';
import styled from 'styled-components';
import { TextRegular } from '../Text/TextRegular';
import { CancelIcon } from '../Icon/CancelIcon';
import { lightGray } from '../../styles/colors';
import { Button } from '../Buttons/Button';
import { BorderButton } from '../Buttons/BorderButton';

interface Props {
  isVisible: boolean;
  width?: string;
  height?: string;
  title?: string;
  backgroundColor?: string;
  children: {
    content: React.ReactElement;
    footer?: React.ReactElement;
    header?: React.ReactElement;
  };
}

type ContentProps = Pick<Props, 'width' | 'height' | 'backgroundColor'>;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div<ContentProps>`
  position: relative;
  top: -10%;
  width: ${props => props.width || undefined};
  height: ${props => props.height || undefined};
  border-radius: 5px;
  background-color: ${props => props.backgroundColor || 'white'};
`;

export const Modal = (props: Props) =>
  props.isVisible ? (
    <Background>
      <Content width={props.width} height={props.height}>
        {props.children.header || <BasicHeader title={props.title} />}

        {props.children.content}

        {props.children.footer || <BasicFooter />}
      </Content>
    </Background>
  ) : null;

interface HeaderProps {
  title?: string;
}

const Header = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 30px;
  border-bottom: 1px solid ${lightGray};
`;

const HeaderCancel = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const BasicHeader = (props: HeaderProps) => (
  <Header>
    <TextRegular text={props.title || ''} fontSize={'2em'} />
    <HeaderCancel>
      <CancelIcon />
    </HeaderCancel>
  </Header>
);

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 30px;
  border-top: 1px solid ${lightGray};
`;

const BasicFooter = (props: HeaderProps) => (
  <Footer>
    <BorderButton text={'Cancel'} onClick={() => {}} />
    <Button text={'Confirm'} marginLeft={'10px'} onClick={() => {}} />
  </Footer>
);
