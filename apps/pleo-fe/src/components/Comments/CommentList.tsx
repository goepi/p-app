import React from 'react';
import styled from 'styled-components';
import { lightBlue } from '../../styles/colors';
import { TextRegular } from '../Text/TextRegular';
import { CancelIcon } from '../Icon/CancelIcon';

const CommentRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0.3em;

  .comment-remove {
    display: none;
  }

  &:hover .comment-remove {
    display: inline-block;
  }
`;

const Comments = styled.div`
  border-left: 3px solid ${lightBlue(0.5)};
`;

interface Props {
  comments: Array<{ text: string }>;
}

export const CommentList = (props: Props) => (
  <Comments>
    {props.comments.map((comment, idx) => (
      <CommentRow key={idx}>
        <div style={{ flex: 1 }}>
          <TextRegular text={comment.text} marginLeft={'0.8em'} />
        </div>
        <CancelIcon height={'15px'} width={'15px'} />
      </CommentRow>
    ))}
  </Comments>
);
