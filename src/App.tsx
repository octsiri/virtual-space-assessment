import * as React from 'react';
import {View, Image, Text, colors} from './foundations';
const App = () => (
  <View padding={20} flex={1} backgroundColor='cyan' height={340}>
    <Text>Test Image</Text>
    <Image
      alt='image'
      height='300px'
      width='200px'
      background={'url("https://fileinfo.com/img/ss/xl/jpg_44.png")'}
      objectFit='cover'
    />
    <Text size='large' color='blueDark'>
      Test Image2
    </Text>
  </View>
);

export default App;
