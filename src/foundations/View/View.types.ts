import {ColorsType} from '../Colors';

export type UnitType = string | number;
export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type JustifyContent =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end';

export type AlignItems =
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'baseline';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';

export type Display =
  | 'flex'
  | 'block'
  | 'none'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'
  | 'table'
  | 'table-cell';

export type Position = 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky';

export interface Props {
  children?: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  color?: string;
  width?: UnitType;
  height?: UnitType;
  margin?: UnitType | UnitType[];
  padding?: UnitType | UnitType[];
  flex?: string | number;
  flexDirection?: Direction;
  flexJustifyContent?: JustifyContent;
  flexAlignItems?: AlignItems;
  flexAlignSelf?: AlignItems;
  flexWrap?: Wrap;
  backgroundColor?: ColorsType;
  backgroundSrc?: string;
  bordered?: boolean;
  borderWidth?: number;
  borderColor?: ColorsType;
  borderRadius?: number;
  textAlign?: TextAlign;
  display?: Display;
  position?: Position;
  zIndex?: number;
  cursor?: string;
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
}
