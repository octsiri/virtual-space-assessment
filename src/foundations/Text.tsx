import * as React from 'react';
import styled, {css} from 'styled-components';

import {colors, type ColorsType} from './Colors';

export type FontSize =
  | 'xmicro'
  | 'micro'
  | 'small'
  | 'regular'
  | 'large'
  | 'extra-large'
  | 'display-small'
  | 'display-medium'
  | 'display-semilarge'
  | 'display-large';

export const fontSizeMap = {
  xmicro: 10,
  micro: 12,
  small: 14,
  regular: 16,
  large: 18,
  'extra-large': 20,
  'display-small': 24,
  'display-medium': 32,
  'display-semilarge': 34,
  'display-large': 40,
};

type FontWeight = 'regular' | 'medium' | 'bold';

const fontWeightMap = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontLineHeight = {
  xmicro: 14,
  micro: 16,
  small: 18,
  regular: 24,
  large: 22,
  'extra-large': 30,
  'display-small': 30,
  'display-medium': 40,
  'display-semilarge': 42,
  'display-large': 60,
};

type TextTransform = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

type TextAlign = 'left' | 'center' | 'right' | 'justify';

interface Props {
  size?: FontSize;
  fontWeight?: FontWeight;
  color?: ColorsType;
  textTransform?: TextTransform;
  textAlign?: TextAlign;
  family?: 'default' | 'serif';
  children?: React.ReactElement | string | null;
  style?: React.CSSProperties;
}
const StyledText = styled.span<Props>`
  &:empty {
    min-height: ${(props) => (props.size ? fontLineHeight[props.size] : fontLineHeight.regular)}px;
  }
  -webkit-font-smoothing: antialiased;
  ${(props) =>
    props.placeholder
      ? css`
          display: unset !important;
          font-family: auto !important;
          color: ${colors.gray30};
          background-color: ${colors.gray30};
        `
      : css`
          color: ${props.color ? colors[props.color] : colors.black};
          font-family: ${props.family === 'serif' ? 'Georgia, Serif' : 'sans-serif'};
        `};
  font-size: ${(props) => (props.size ? fontSizeMap[props.size] : fontSizeMap.regular)}px;
  line-height: ${(props) => (props.size ? fontLineHeight[props.size] : fontLineHeight.regular)}px;
  font-weight: ${(props) =>
    props.fontWeight ? fontWeightMap[props.fontWeight] : fontWeightMap.regular};
  ${(props) =>
    props.textTransform
      ? css`
          text-transform: ${props.textTransform};
        `
      : css``};
  ${(props) =>
    props.textAlign
      ? css`
          text-align: ${props.textAlign};
        `
      : css``};
`;

const Text = (props: Props) => {
  const {size, fontWeight, color, textTransform, textAlign, family, children, ...otherProps} =
    props;

  return (
    <StyledText
      size={size}
      fontWeight={fontWeight}
      color={color}
      textTransform={textTransform}
      family={family}
      textAlign={textAlign}
      {...otherProps}
    >
      {children}
    </StyledText>
  );
};

export default Text;
