import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Avatar} from '../components/Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarImage = Template.bind({});
AvatarImage.args = {
  src: 'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
  username: 'Tomi Budi',
  size: 'lg',
  defaultBackground: 'cyanLightest',
  defaultColor: 'gray70',
};

export const AvatarText = Template.bind({});
AvatarText.args = {
  noTrim: false,
  username: 'Tomi Budi',
  bordered: true,
  borderColor: 'gray20',
  size: 'lg',
  defaultBackground: 'white',
  defaultColor: 'blue',
};
