import {ColorsType} from '../Colors';

export type FontSize = 'xs' | 'sm' | 'md' | 'lg';

export type FontWeight = 'regular' | 'medium' | 'bold';

export type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface Props {
  size?: FontSize;
  fontWeight?: FontWeight;
  color?: ColorsType;
  textTransform?: TextTransform;
  textAlign?: TextAlign;
  family?: 'default' | 'serif';
  children?: React.ReactElement | string | null;
  style?: React.CSSProperties;
}
