import * as React from 'react';
import {View, Text} from './foundations';
import {Avatar, AvatarsGroup} from './components/Avatar';

const App = () => (
  <View padding={20} height='100vh' width={'100vw'} flexAlignItems='center' flexDirection='column'>
    <Text size='lg' color='cyanDarkest' fontWeight='bold'>
      Show Case Foundation UIKIT
    </Text>

    <View margin={'20px'} flexDirection='row'>
      <Avatar
        src='https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
        username='Tomi Budi'
        size='xs'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
      <Avatar
        username='Tomi Budi'
        size='xs'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
    </View>
    <View margin={'20px'} flexDirection='row'>
      <Avatar
        src='https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
        username='Tomi Budi'
        size='sm'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
      <Avatar username='Tomi Budi' size='sm' />
    </View>
    <View margin={'20px'} flexDirection='row'>
      <Avatar
        src='https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
        username='Tomi Budi'
        size='md'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
      <Avatar
        username='Tomi Budi'
        size='md'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
    </View>
    <View margin={'20px'} flexDirection='row'>
      <Avatar
        bordered
        src='https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg'
        username='Tomi Budi'
        size='lg'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
      <Avatar
        username='Tomi Budi'
        size='lg'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
    </View>
    <AvatarsGroup
      size='md'
      maxLength={3}
      avatars={[
        {
          id: '1',
          username: 'Angel Suryadiningrat',
          imageSource:
            'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
        {
          id: '2',
          username: 'Angel Suryadiningrat',
          imageSource:
            'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
        {
          id: '3',
          username: 'Angel Suryadiningrat',
          imageSource:
            'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
        {
          id: '4',
          username: 'Angel Suryadiningrat',
          imageSource:
            'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
        {
          id: '5',
          username: 'Angel Suryadiningrat',
          imageSource:
            'https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
        },
      ]}
    />
  </View>
);

export default App;
