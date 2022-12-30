import * as React from 'react';
import {ColorsType} from '../Colors';

export type UnitType = string | number;
export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export type BackgroundRepeat =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'no-repeat'
  | 'space'
  | 'round'
  | 'initial'
  | 'inherit';

export interface Props {
  style?: React.CSSProperties;
  width?: UnitType;
  height?: UnitType;
  background?: string | null | undefined;
  children?: JSX.Element;
  objectFit?: ObjectFit;
  backgroundColor?: ColorsType;
  backgroundRepeat?: BackgroundRepeat;
  noPadding?: boolean;
  alt?: string;
  src?: string;
}
