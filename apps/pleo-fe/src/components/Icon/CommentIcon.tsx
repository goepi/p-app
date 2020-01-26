import React from 'react';
import { Icon } from './Icon';
import CommentSvg from '../../svg/comment.svg';

interface Props {
  height?: string;
  width?: string;
  color?: string;
}

export const CommentIcon = (props: Props) => (
  <svg
    width={props.width || '50px'}
    height={props.height || '50px'}
    viewBox="0 0 24 24"
    fill={props.color || 'black'}
    stroke={props.color || 'black'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
