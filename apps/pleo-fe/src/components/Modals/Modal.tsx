import React from 'react';
import styled from 'styled-components';
import { TextRegular } from '../Text/TextRegular';
import { CancelIcon } from '../Icon/CancelIcon';

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

const Header = styled.div``;

const Footer = styled.div``;

const Content = styled.div<ContentProps>`
  position: relative;
  top: -10%;
  width: ${props => props.width || '50%'};
  height: ${props => props.height || '50%'};
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

const BasicHeader = (props: HeaderProps) => (
  <Header>
    <TextRegular text={props.title || ''} />
    <CancelIcon />
  </Header>
);

const BasicFooter = (props: HeaderProps) => (
  <Footer>
    <CancelIcon />
  </Footer>
);
