import * as React from 'react';
import styled, {css} from 'styled-components';

import {fontLineHeight, fontSizeMap, fontWeightMap} from './configs';
import {colors} from '../Colors';
import {Props} from './Text.types';

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
          color: ${colors.gray20};
          background-color: ${colors.gray20};
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
