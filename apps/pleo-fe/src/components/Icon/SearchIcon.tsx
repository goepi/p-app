import React from 'react';

interface Props {
  height?: string;
  width?: string;
  color?: string;
  display?: string;
  onClick?: () => void;
}

export const SearchIcon = (props: Props) => (
  <svg
    width={props.width || '25px'}
    height={props.height || '25px'}
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color || 'black'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
