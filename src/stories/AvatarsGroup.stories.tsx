import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {AvatarsGroup} from '../components/Avatar';

const TEMP_USER_LIST = [
  {
    id: '1',
    username: 'Angelina Joli',
    imageSource:
      'https://st.depositphotos.com/1694341/1303/i/600/depositphotos_13037294-stock-photo-angelina-jolie.jpg',
  },
  {
    id: '2',
    username: 'Tomi Budi',
    imageSource: '',
  },
  {
    id: '3',
    username: 'Tje Jody',
    imageSource: 'https://thumbs.dreamstime.com/b/jodi-lyn-o-keefe-26041224.jpg',
  },
  {
    id: '4',
    username: 'Julius Cesaren',
    imageSource:
      'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
  },

  {
    id: '5',
    username: 'Neymar Jr',
    imageSource:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHR_H3Tm3nQNIhpIniTDKGE2jqyV-L4bWXA&usqp=CAU',
  },
];

export default {
  title: 'Components/AvatarsGroup',
  component: AvatarsGroup,
} as ComponentMeta<typeof AvatarsGroup>;

const Template: ComponentStory<typeof AvatarsGroup> = (args) => <AvatarsGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  avatars: TEMP_USER_LIST,
  size: 'lg',
  maxLength: 3,
};
