/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import {Avatar, AvatarsGroup} from '../components/Avatar';
import {getAvatarList} from '../utils/getAvatarList';

describe('Snapshot Avatar Component', () => {
  test('Render avatar with default props correctly', () => {
    const tree = renderer.create(<Avatar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render avatar with custom props correctly', () => {
    const tree = renderer
      .create(
        <Avatar
          src='https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
          size='md'
          onClick={() => {
            console.log('click');
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render avatar with initial username only correctly', () => {
    const tree = renderer
      .create(
        <Avatar
          username='Tony Shark'
          onClick={() => {
            console.log('click');
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render avatar with people remains counts and border props correctly', () => {
    const tree = renderer
      .create(
        <Avatar
          noTrim
          username='7'
          bordered
          borderColor='gray20'
          defaultBackground='blue'
          defaultColor='cyan'
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render avatar with hidden props true correctly', () => {
    const tree = renderer
      .create(
        <Avatar
          hidden
          src='https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
          username='Invisble Man'
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Snapshot AvatarsGroup Component', () => {
  test('Render avatars group with default props correctly', () => {
    const tree = renderer.create(<AvatarsGroup />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render avatars group with custom props correctly', () => {
    const tree = renderer
      .create(<AvatarsGroup avatars={getAvatarList()} size='lg' maxLength={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
