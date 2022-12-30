import * as React from 'react';
import styled from 'styled-components';
import {AvatarSizeTypes, avatarSizeMapper} from './configs';
import Avatar from './Avatar';

interface AvatarDataType {
  id: string;
  username: string | undefined;
  imageSource: string | undefined;
}

interface Props {
  avatars?: AvatarDataType[];
  maxLength?: number;
  size?: AvatarSizeTypes;
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AvatarsGroup = (props: Props) => {
  const {avatars = [], maxLength = 1, size = 'md'} = props;
  const avatarRemains = avatars ? avatars.length - maxLength : -1;

  const avatarGroupContents = React.useMemo(() => {
    if (avatars && avatars.length) {
      return avatars.map((avatar, idx) => (
        <Avatar
          key={'avatar-' + idx + avatar.id}
          src={avatar.imageSource}
          username={avatar.username}
          size={size}
          bordered
          borderColor='white'
          hidden={idx >= (maxLength as number)}
          style={{marginLeft: avatarSizeMapper[size].marginLeft}}
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
          username={`${avatarRemains}`}
          size={size}
          bordered
          borderColor='white'
          hidden={avatarRemains <= 0}
          style={{marginLeft: avatarSizeMapper[size].marginLeft}}
        />
      </Wrapper>
    );
  }
  return <Avatar />;
};

export default React.memo<Props>(AvatarsGroup);
