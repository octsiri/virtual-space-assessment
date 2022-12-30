import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {AvatarsGroup} from '../components/Avatar';
import {getAvatarList} from '../utils/getAvatarList';

export default {
  title: 'Components/AvatarsGroup',
  component: AvatarsGroup,
} as ComponentMeta<typeof AvatarsGroup>;

const Template: ComponentStory<typeof AvatarsGroup> = (args) => <AvatarsGroup {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const CustomAvatarsGroup = Template.bind({});
CustomAvatarsGroup.args = {
  avatars: getAvatarList(),
  maxLength: 3,
  size: 'lg',
};
