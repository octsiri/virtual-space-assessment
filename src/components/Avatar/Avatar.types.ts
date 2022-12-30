import * as React from 'react';

import {ColorsType} from '../../foundations';
import {AvatarSizeTypes} from './configs';

export interface Props {
  hidden?: boolean;
  src?: string;
  username?: string;
  size: AvatarSizeTypes;
  noTrim?: boolean;
  bordered?: boolean;
  withPadding?: boolean;
  defaultColor?: ColorsType;
  borderColor?: ColorsType;
  defaultBackground?: ColorsType;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export interface AvatarImageContainerProps {
  name?: string;
  withPadding?: boolean;
  size?: AvatarSizeTypes;
  src?: string;
  alt?: string;
  defaultBackground?: string;
  clickable?: boolean;
}
