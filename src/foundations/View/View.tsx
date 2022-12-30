import * as React from 'react';
import styled, {css} from 'styled-components';

import {colors} from '../Colors';
import convertValueToUnit from '../../utils/convertValueToUnit';
import {Props} from './View.types';

const StyledView = styled.div<Props>`
  ${(props) =>
    props.flex ||
    props.flexDirection ||
    props.flexAlignItems ||
    props.flexJustifyContent ||
    props.flexAlignSelf ||
    props.flexWrap
      ? css`
          display: flex;
        `
      : ''};
  ${(props) =>
    css`
      ${props.flex
        ? css`
            flex: ${props.flex};
          `
        : ''};
      ${props.flexDirection
        ? css`
            flex-direction: ${props.flexDirection};
          `
        : ''};
      ${props.flexAlignItems
        ? css`
            align-items: ${props.flexAlignItems};
          `
        : ''};
      ${props.flexJustifyContent
        ? css`
            justify-content: ${props.flexJustifyContent};
          `
        : ''};
      ${props.flexAlignSelf
        ? css`
            align-self: ${props.flexAlignSelf};
          `
        : ''};
      ${props.flexWrap
        ? css`
            flex-wrap: ${props.flexWrap};
          `
        : ''};
    `};
  ${(props) =>
    props.margin
      ? css`
          margin: ${props.margin};
        `
      : ''};
  ${(props) =>
    props.padding
      ? css`
         padding: ${props.padding}}
        `
      : ''};
  ${(props) =>
    props.backgroundSrc
      ? css`
          background-image: url('${props.backgroundSrc}');
          background-repeat: no-repeat;
          background-size: cover;
        `
      : ''};
  ${(props) =>
    props.bordered
      ? css`
          overflow: hidden;
          border-radius: ${props.bordered ? 6 : 0}px;
        `
      : ''};
  ${(props) =>
    props.borderRadius || props.borderRadius === 0
      ? css`
          overflow: hidden;
          border-radius: ${props.borderRadius}px;
        `
      : ''};
  ${(props) =>
    props.bordered || props.borderWidth || props.borderColor
      ? css`
          border-width: ${props.borderWidth ? props.borderWidth : 1}px;
          border-style: solid;
          border-color: ${props.borderColor ? colors[props.borderColor] : ''};
        `
      : ''};
  ${(props) =>
    props.height
      ? css`
          height: ${convertValueToUnit(props.height)};
        `
      : ''};
  ${(props) =>
    props.width
      ? css`
          width: ${convertValueToUnit(props.width)};
        `
      : ''};
  ${(props) =>
    props.textAlign
      ? css`
          text-align: ${props.textAlign};
        `
      : css``};
  ${(props) =>
    props.position
      ? css`
          position: ${props.position};
        `
      : css``};
  ${(props) =>
    props.display
      ? css`
          display: ${props.display};
        `
      : css``};
  ${(props) =>
    props.backgroundColor
      ? css`
          background-color: ${colors[props.backgroundColor]};
        `
      : ''};
  ${(props) =>
    props.zIndex
      ? css`
          z-index: ${props.zIndex};
        `
      : css``};
  ${(props) =>
    props.cursor
      ? css`
          cursor: ${props.cursor};
        `
      : css``};
  ${(props) =>
    props.top !== undefined
      ? css`
          top: ${props.top};
        `
      : css``};
  ${(props) =>
    props.bottom !== undefined
      ? css`
          bottom: ${props.bottom};
        `
      : css``};
  ${(props) =>
    props.left !== undefined
      ? css`
          left: ${props.left};
        `
      : css``};
  ${(props) =>
    props.right !== undefined
      ? css`
          right: ${props.right};
        `
      : css``};
`;

const View = (props: Props) => (
  <StyledView
    flex={props.flex}
    flexDirection={props.flexDirection}
    flexJustifyContent={props.flexJustifyContent}
    flexAlignItems={props.flexAlignItems}
    flexAlignSelf={props.flexAlignSelf}
    flexWrap={props.flexWrap}
    margin={props.margin}
    padding={props.padding}
    borderRadius={props.borderRadius}
    bordered={props.bordered}
    width={props.width}
    height={props.height}
    textAlign={props.textAlign}
    position={props.position}
    display={props.display}
    zIndex={props.zIndex}
    cursor={props.cursor}
    top={props.top}
    left={props.left}
    right={props.right}
    {...props}
  >
    {props.children}
  </StyledView>
);

export default View;
