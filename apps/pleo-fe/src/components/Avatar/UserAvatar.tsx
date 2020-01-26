import React from 'react';
import { Avatar } from './Avatar';
import { lightGray } from '../../styles/colors';

interface Props {
  length?: string;
  firstName: string;
  lastName: string;
  backgroundColor?: string;
  fontSize?: string;
}

export const UserAvatar = (props: Props) => (
  <Avatar
    backgroundColor={props.backgroundColor || lightGray}
    length={props.length || '30px'}
    text={`${props.firstName.charAt(0)} ${props.lastName.charAt(0)}`}
    fontSize={props.fontSize || '10px'}
  />
);
