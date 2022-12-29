import * as React from 'react';
import styled, {css} from 'styled-components';
import {colors, ColorsType, Image, Text} from '../foundations';
import {avatarSizeMapper, type AvatarSizeTypes, getInitialCapitalName} from '../utils';

interface Props {
  src?: string;
  name?: string;
  size: AvatarSizeTypes;
  bordered?: boolean;
  withPadding?: boolean;
  defaultColor?: ColorsType;
  borderColor?: ColorsType;
  defaultBackground: ColorsType;
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
`;

const Avatar = (props: Props) => {
  const {
    src,
    name,
    size,
    bordered,
    borderColor = 'white',
    defaultColor = 'cyanDarkest',
    defaultBackground = 'blueLightest',
    ...otherProps
  } = props;
  const background = colors[defaultBackground];
  const color = colors[defaultColor];

  const avatar = React.useMemo(() => {
    if (src && src.length) {
      return (
        <Image
          background={
            'url("https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg")'
          }
          width={`${avatarSizeMapper[size].size}px`}
          objectFit='cover'
        />
      );
    }
    return (
      <Text size={size} color={defaultColor}>
        {getInitialCapitalName(name)}
      </Text>
    );
  }, [src, name, size]);

  return (
    <AvatarWrapper
      bordered={bordered}
      size={size}
      defaultBackground={defaultBackground}
      borderColor={borderColor}
    >
      <AvatarImageContainer
        defaultBackground={background}
        color={color}
        size={size}
        {...otherProps}
      >
        {avatar}
      </AvatarImageContainer>
    </AvatarWrapper>
  );
};

export default Avatar;
