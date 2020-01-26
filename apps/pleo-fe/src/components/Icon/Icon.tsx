import React from 'react';

interface Props {
  source: string;
  height: string;
  width: string;
}

export const Icon = (props: Props) => <img src={props.source} height={props.height} width={props.width} />;
