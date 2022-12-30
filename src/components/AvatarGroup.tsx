import * as React from 'react';
import styled from 'styled-components';
import {AvatarSizeTypes} from '../utils';
import Avatar from './Avatar';

interface AvatarDataType {
  id: string;
  name: string | undefined;
  imgSrc: string | undefined;
}

interface Props {
  avatars?: AvatarDataType[];
  maxLength?: number;
  size: AvatarSizeTypes;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AvatarGroup = (props: Props) => {
  const {avatars, maxLength = 1, size} = props;
  const avatarRemains = avatars ? avatars.length - maxLength : -1;

  const avatarGroupContents = React.useMemo(() => {
    if (avatars && avatars.length) {
      return avatars.map((avatar, idx) => (
        <Avatar
          key={'avatar-' + idx + avatar.id}
          src={avatar.imgSrc}
          name={avatar.name}
          size={size}
          bordered
          hidden={idx >= (maxLength as number)}
          style={{marginLeft: -10}}
        />
      ));
    }
  }, [avatars, size, maxLength]);

  if (avatars && avatars.length) {
    return (
      <Wrapper>
        {avatarGroupContents}
        <Avatar
          noTrim
          name={`${avatarRemains}`}
          size={size}
          bordered
          defaultBackground='cyanLightest'
          defaultColor='gray70'
          hidden={avatarRemains <= 0}
          style={{marginLeft: -10}}
        />
      </Wrapper>
    );
  }
  return <div />;
};

export default AvatarGroup;
