import * as React from 'react';
import styled, {css} from 'styled-components';

import {colors, type ColorsType} from './Colors';

export type FontSize = 'xs' | 'sm' | 'md' | 'lg';

export const fontSizeMap = {
  xs: 10,
  sm: 14,
  md: 18,
  lg: 28,
};

type FontWeight = 'regular' | 'medium' | 'bold';

const fontWeightMap = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontLineHeight = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 34,
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
    min-height: ${(props) => (props.size ? fontLineHeight[props.size] : fontLineHeight.md)}px;
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
  font-size: ${(props) => (props.size ? fontSizeMap[props.size] : fontSizeMap.md)}px;
  line-height: ${(props) => (props.size ? fontLineHeight[props.size] : fontLineHeight.md)}px;
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
