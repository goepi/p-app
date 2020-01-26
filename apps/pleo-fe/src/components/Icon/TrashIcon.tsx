import React from 'react';

interface Props {
  height?: string;
  width?: string;
  color?: string;
}

export const TrashIcon = (props: Props) => (
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
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);
