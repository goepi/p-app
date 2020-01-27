import React from 'react';

interface Props {
  height?: string;
  width?: string;
  color?: string;
  display?: string;
  onClick?: () => void;
}

export const PlusIcon = (props: Props) => (
  <svg
    width={props.width || '25px'}
    height={props.height || '25px'}
    viewBox="0 0 24 24"
    fill={props.color || 'black'}
    stroke={props.color || 'black'}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
