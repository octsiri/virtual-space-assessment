import * as React from 'react';
import styled, {css} from 'styled-components';

import {colors, Image, Text, View} from '../../foundations';
import {getInitialCapitalName} from '../../utils';
import {Props, AvatarImageContainerProps} from './Avatar.types';
import {avatarSizeMapper} from './configs';

const AvatarWrapper = styled.div<Props>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-radius: 50%;
  ${(props) =>
    props.bordered
      ? css`
          border-color: ${props.borderColor ? colors[props.borderColor] : 'white'};
          border-style: solid;
          border-width: ${avatarSizeMapper[props.size].borderWidth}px;
        `
      : ''};
  width: ${(props) => avatarSizeMapper[props.size].size}px;
  height: ${(props) => avatarSizeMapper[props.size].size}px;
  background-color: ${(props) =>
    props.defaultBackground ? colors[props.defaultBackground] : colors.gray70};
  position: relative;
  text-align: center;
`;

const AvatarImageContainer = styled.div<AvatarImageContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${(props) => (props.defaultBackground ? props.defaultBackground : colors.smokeLight)};
  color: ${(props) => (props.color ? props.color : colors.gray70)};
  border-radius: 50%;
  &:hover {
    cursor: ${(props) => (props.clickable ? 'pointer' : undefined)};
    opacity: 0.9;
  }
`;

const Avatar = (props: Props) => {
  const {
    hidden,
    src,
    username,
    size,
    noTrim,
    bordered,
    borderColor = 'gray20',
    defaultColor = 'gray70',
    defaultBackground = 'cyanLightest',
    onClick,
    style,
  } = props;
  const background = colors[defaultBackground];
  const color = colors[defaultColor];

  const avatar = React.useMemo(() => {
    if (src && src.length) {
      return (
        <Image
          background={`url(${src})`}
          width={`${avatarSizeMapper[size].size}px`}
          objectFit='cover'
        />
      );
    }
    return (
      <View flexDirection='row' flexAlignItems='center' flexJustifyContent='center'>
        {noTrim ? (
          <Text size={size} color={defaultColor} textAlign='justify' style={{marginTop: -3}}>
            +
          </Text>
        ) : (
          <div />
        )}
        <Text size={size} color={defaultColor} textAlign='justify'>
          {noTrim ? username : getInitialCapitalName(username, 2)}
        </Text>
      </View>
    );
  }, [src, username, size, noTrim]);

  return !hidden ? (
    <AvatarWrapper
      bordered={bordered}
      size={size}
      defaultBackground={defaultBackground}
      borderColor={borderColor}
      style={style}
      onClick={onClick}
    >
      <AvatarImageContainer
        defaultBackground={background}
        color={color}
        size={size}
        clickable={Boolean(onClick)}
      >
        {avatar}
      </AvatarImageContainer>
    </AvatarWrapper>
  ) : (
    <div />
  );
};

export default React.memo<Props>(Avatar);
