import * as React from 'react';
import styled, {css} from 'styled-components';

import {colors, type ColorsType} from './Colors';
import convertValueToUnit from '../utils/convertValueToUnit';

type UnitType = string | number;
type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type JustifyContent =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end';

type AlignItems =
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

type VerticalAlign = 'top' | 'middle' | 'bottom' | 'text-bottom' | 'text-top' | 'baseline';

type HorizontalAlign = 'middle' | 'right' | 'left';

type TextAlign = 'left' | 'center' | 'right' | 'justify';

type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial' | 'inherit';

type Display =
  | 'flex'
  | 'block'
  | 'none'
  | 'inline'
  | 'inline-block'
  | 'inline-flex'
  | 'table'
  | 'table-cell';

type Position = 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky';

interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  style?: React.CSSProperties;
  color?: string;
  width?: UnitType;
  height?: UnitType;
  maxWidth?: UnitType;
  minWidth?: UnitType;
  maxHeight?: UnitType;
  minHeight?: UnitType;
  margin?: UnitType | UnitType[];
  marginTop?: UnitType;
  marginBottom?: UnitType;
  marginLeft?: UnitType;
  marginRight?: UnitType;
  marginY?: UnitType;
  marginX?: UnitType;
  padding?: UnitType | UnitType[];
  paddingTop?: UnitType;
  paddingBottom?: UnitType;
  paddingLeft?: UnitType;
  paddingRight?: UnitType;
  paddingY?: UnitType;
  paddingX?: UnitType;
  qaTag?: string;
  flex?: string | number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  flexDirection?: Direction;
  flexJustifyContent?: JustifyContent;
  flexAlignItems?: AlignItems;
  flexAlignSelf?: AlignItems;
  flexWrap?: Wrap;
  depth?: number;
  backgroundColor?: ColorsType;
  backgroundSrc?: string;
  bordered?: boolean;
  filled?: boolean;
  borderWidth?: number;
  borderColor?: ColorsType;
  borderRadius?: number;
  verticalAlign?: VerticalAlign;
  horizontalAlign?: HorizontalAlign;
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

const StyledView = styled.div<Props>`
  ${(props) =>
    props.flex ||
    props.flexDirection ||
    props.flexGrow ||
    props.flexShrink ||
    props.flexBasis ||
    props.flexAlignItems ||
    props.flexJustifyContent ||
    props.flexAlignSelf ||
    props.flexWrap ||
    props.verticalAlign ||
    props.horizontalAlign
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
      ${typeof props.flexGrow === 'number'
        ? css`
            flex-grow: ${props.flexGrow};
          `
        : ''};
      ${typeof props.flexShrink === 'number'
        ? css`
            flex-shrink: ${props.flexShrink};
          `
        : ''};
      ${props.flexBasis
        ? css`
            flex-basis: ${props.flexBasis};
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
    props.marginTop
      ? css`
          margin-top: ${convertValueToUnit(props.marginTop)};
        `
      : ''};
  ${(props) =>
    props.marginBottom
      ? css`
          margin-bottom: ${convertValueToUnit(props.marginBottom)};
        `
      : ''};
  ${(props) =>
    props.marginLeft
      ? css`
          margin-left: ${convertValueToUnit(props.marginLeft)};
        `
      : ''};
  ${(props) =>
    props.marginRight
      ? css`
          margin-right: ${convertValueToUnit(props.marginRight)};
        `
      : ''};
  ${(props) =>
    props.marginY
      ? css`
          margin-top: ${convertValueToUnit(props.marginY)};
          margin-bottom: ${convertValueToUnit(props.marginY)};
        `
      : ''};
  ${(props) =>
    props.marginX
      ? css`
          margin-left: ${convertValueToUnit(props.marginX)};
          margin-right: ${convertValueToUnit(props.marginX)};
        `
      : ''};
  ${(props) =>
    props.padding
      ? css`
         padding: ${props.padding}}
        `
      : ''};
  ${(props) =>
    props.paddingTop
      ? css`
          padding-top: ${convertValueToUnit(props.paddingTop)};
        `
      : ''};
  ${(props) =>
    props.paddingBottom
      ? css`
          padding-bottom: ${convertValueToUnit(props.paddingBottom)};
        `
      : ''};
  ${(props) =>
    props.paddingLeft
      ? css`
          padding-left: ${convertValueToUnit(props.paddingLeft)};
        `
      : ''};
  ${(props) =>
    props.paddingRight
      ? css`
          padding-right: ${convertValueToUnit(props.paddingRight)};
        `
      : ''};
  ${(props) =>
    props.paddingY
      ? css`
          padding-top: ${convertValueToUnit(props.paddingY)};
          padding-bottom: ${convertValueToUnit(props.paddingY)};
        `
      : ''};
  ${(props) =>
    props.paddingX
      ? css`
          padding-left: ${convertValueToUnit(props.paddingX)};
          padding-right: ${convertValueToUnit(props.paddingX)};
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
    props.maxHeight
      ? css`
          max-height: ${convertValueToUnit(props.maxHeight)};
        `
      : ''};
  ${(props) =>
    props.minHeight
      ? css`
          min-height: ${convertValueToUnit(props.minHeight)};
        `
      : ''};
  ${(props) =>
    props.width
      ? css`
          width: ${convertValueToUnit(props.width)};
        `
      : ''};
  ${(props) =>
    props.maxWidth
      ? css`
          max-width: ${convertValueToUnit(props.maxWidth)};
        `
      : ''};
  ${(props) =>
    props.minWidth
      ? css`
          min-width: ${convertValueToUnit(props.minWidth)};
        `
      : ''};
  ${(props) =>
    props.verticalAlign
      ? props.verticalAlign === 'top'
        ? css`
            align-items: flex-start;
          `
        : props.verticalAlign === 'middle'
        ? css`
            align-items: center;
          `
        : props.verticalAlign === 'bottom'
        ? css`
            align-items: flex-end;
          `
        : ''
      : ''};
  ${(props) =>
    props.horizontalAlign
      ? props.horizontalAlign === 'right'
        ? css`
            justify-content: flex-end;
          `
        : props.horizontalAlign === 'middle'
        ? css`
            justify-content: center;
          `
        : props.horizontalAlign === 'left'
        ? css`
            justify-content: flex-start;
          `
        : ''
      : ''};

  ${(props) =>
    props.textAlign
      ? css`
          text-align: ${props.textAlign};
        `
      : css``};
  ${(props) =>
    props.verticalAlign
      ? css`
          text-align: ${props.verticalAlign};
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
    flexGrow={props.flexGrow}
    flexShrink={props.flexShrink}
    flexBasis={props.flexBasis}
    flexDirection={props.flexDirection}
    flexJustifyContent={props.flexJustifyContent}
    flexAlignItems={props.flexAlignItems}
    flexAlignSelf={props.flexAlignSelf}
    flexWrap={props.flexWrap}
    margin={props.margin}
    marginTop={props.marginTop}
    marginBottom={props.marginBottom}
    marginLeft={props.marginLeft}
    marginRight={props.marginRight}
    marginY={props.marginY}
    marginX={props.marginX}
    padding={props.padding}
    paddingTop={props.paddingTop}
    paddingBottom={props.paddingBottom}
    paddingLeft={props.paddingLeft}
    paddingRight={props.paddingRight}
    paddingY={props.paddingY}
    paddingX={props.paddingX}
    borderRadius={props.borderRadius}
    bordered={props.bordered}
    filled={props.filled}
    data-qa-id={props.qaTag}
    width={props.width}
    maxWidth={props.maxWidth}
    minWidth={props.minWidth}
    height={props.height}
    maxHeight={props.maxHeight}
    minHeight={props.minHeight}
    verticalAlign={props.verticalAlign}
    horizontalAlign={props.horizontalAlign}
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
