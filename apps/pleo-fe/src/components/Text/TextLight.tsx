import React from 'react';
import { TextRegular } from './TextRegular';

interface Props {
  text: string;
  marginLeft?: string;
  fontSize?: string;
}

export const TextStrong = (props: Props) => <TextRegular {...props} fontFamily={'roboto-medium'} />;
