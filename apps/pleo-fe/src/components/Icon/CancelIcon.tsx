import React from 'react';

interface Props {
  height?: string;
  width?: string;
  color?: string;
  display?: string;
  onClick?: () => void;
}

export const CancelIcon = (props: Props) => (
  <svg
    onClick={props.onClick}
    style={{ cursor: 'pointer' }}
    className="comment-remove"
    width={props.width || '25px'}
    height={props.width || '25px'}
    viewBox="0 0 24 24"
    fill={props.color || 'black'}
    stroke={props.color || 'black'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
