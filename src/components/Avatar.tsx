import * as React from 'react';
import styled, {css} from 'styled-components';
import {colors, ColorsType, Image, Text, View} from '../foundations';
import {avatarSizeMapper, type AvatarSizeTypes, getInitialCapitalName} from '../utils';

interface Props {
  hidden?: boolean;
  src?: string;
  name?: string;
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

interface AvatarImageContainerProps {
  name?: string;
  withPadding?: boolean;
  size?: AvatarSizeTypes;
  src?: string;
  alt?: string;
  defaultBackground?: string;
}

const AvatarWrapper = styled.div<Props>`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
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
  font-weight: 500;
  border-radius: 50%;
  background: ${(props) => (props.defaultBackground ? props.defaultBackground : colors.smokeLight)};
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
  color: ${(props) => (props.color ? props.color : colors.gray60)};
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

const Avatar = (props: Props) => {
  const {
    hidden,
    src,
    name,
    size,
    noTrim,
    bordered,
    borderColor = 'white',
    defaultColor = 'cyanDarkest',
    defaultBackground = 'blueLightest',
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
          {noTrim ? name : getInitialCapitalName(name, 2)}
        </Text>
      </View>
    );
  }, [src, name, size, noTrim]);

  return !hidden ? (
    <AvatarWrapper
      bordered={bordered}
      size={size}
      defaultBackground={defaultBackground}
      borderColor={borderColor}
      style={style}
      onClick={onClick}
    >
      <AvatarImageContainer defaultBackground={background} color={color} size={size}>
        {avatar}
      </AvatarImageContainer>
    </AvatarWrapper>
  ) : (
    <div />
  );
};

export default Avatar;
