/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 3000);
  }, [navigation]);

  return (
    <View>
      <Image
        source={require('../../public/images/music-man.png')}
        style={{
          width: 300,
          height: 300,
          marginTop: '50%',
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      />
    </View>
  );
};

export default Splash;
