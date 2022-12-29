import * as React from 'react';
import {View, Text} from './foundations';
import Avatar from './components/Avatar';

const App = () => (
  <View padding={20} height='100vh' width={'100vw'} flexAlignItems='center' flexDirection='column'>
    <Text size='lg' color='cyanDark' fontWeight='bold'>
      Show Case Foundation UIKIT
    </Text>

    <View margin={'20px'} flexDirection='row'>
      <Avatar
        src='url("https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg")'
        name='Tomi Budi'
        size='xs'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
      <Avatar name='Tomi Budi' size='xs' defaultBackground='cyanLightest' defaultColor='gray70' />
    </View>
    <View margin={'20px'} flexDirection='row'>
      <Avatar
        src='url("https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg")'
        name='Tomi Budi'
        size='md'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
      <Avatar name='Tomi Budi' size='sm' defaultBackground='cyanLightest' defaultColor='gray70' />
    </View>
    <View margin={'20px'} flexDirection='row'>
      <Avatar
        src='url("https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg")'
        name='Tomi Budi'
        size='md'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
      <Avatar name='Tomi Budi' size='md' defaultBackground='cyanLightest' defaultColor='gray70' />
    </View>
    <View margin={'20px'} flexDirection='row'>
      <Avatar
        bordered
        src='url("https://t4.ftcdn.net/jpg/03/64/21/11/240_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg")'
        name='Tomi Budi'
        size='lg'
        defaultBackground='cyanLightest'
        defaultColor='gray70'
      />
      <Avatar name='Tomi Budi' size='lg' defaultBackground='cyanLightest' defaultColor='gray70' />
    </View>
  </View>
);

export default App;
