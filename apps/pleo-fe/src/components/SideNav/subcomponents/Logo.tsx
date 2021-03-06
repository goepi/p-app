import React from 'react';

interface Props {
  height?: number;
}

export const Logo = (props: Props) => (
  <svg data-cy="pleo-logo" height={props.height || 63} viewBox="0 0 151 63">
    <title>pleo</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none">
      <g id="pleo" transform="translate(1.000000, 0.000000)" stroke="#FF3366" strokeWidth="3">
        <path
          d="M7.1,44.2 C10.4,47.1 14.7,48.9 19.5,48.9 C29.8,48.9 38.2,40.5 38.2,30.2 C38.2,19.9 29.8,11.5 19.5,11.5 C9.2,11.5 0.8,20 0.8,30.3 L0.8,62.8"
          id="Shape"
        />
        <path
          d="M148.5,30.3 C148.5,40.6 140.1,49 129.8,49 C119.5,49 111.1,40.6 111.1,30.3 C111.1,20 119.5,11.6 129.8,11.6 C140.1,11.6 148.5,20 148.5,30.3 Z"
          id="Shape"
        />
        <path
          d="M98.2,40.9 C94.8,45.7 89.2,48.9 82.9,48.9 C72.6,48.9 64.2,40.5 64.2,30.2 C64.2,19.9 72.6,11.5 82.9,11.5 C93.2,11.5 101.6,19.9 101.6,30.2 L77.9,30.2"
          id="Shape"
        />
        <path d="M50.3,0.6 L50.3,39.6 C50.3,39.6 50.1,47.5 58,49" id="Shape" />
      </g>
    </g>
  </svg>
);
