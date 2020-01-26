import React from 'react';
import styled from 'styled-components';
import { dimGray, lightGray, whiteSmoke } from '../../styles/colors';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  height: string;
}

const Form = styled.form`
  flex: 1;
  margin-left: 10px;
`;

interface TextAreaProps {
  height: string;
}

const TextArea = styled.textarea<TextAreaProps>`
  background-color: ${whiteSmoke};
  border-radius: 10px;
  border-width: 0;
  outline: none;
  box-sizing: border-box;
  width: 100%;
  resize: none;
  height: ${props => props.height};
  ::placeholder {
    color: ${dimGray};
  }
  padding: 1em;
  line-height: 1em;
`;

export const CommentInput = (props: Props) => (
  <Form onSubmit={props.onSubmit}>
    <TextArea
      value={props.value}
      onChange={props.onChange}
      placeholder={'Write a comment...'}
      onKeyDown={props.onKeyDown}
      onKeyPress={props.onKeyPress}
      height={props.height}
    />
  </Form>
);
