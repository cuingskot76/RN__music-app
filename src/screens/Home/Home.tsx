/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Heading from '../../components/atom/Heading';
import styles from './Home.style';
import Avatar from '../../components/atom/Avatar';
import {ProfileImage} from '../../../public/images';
import {SIZES} from '../../constants/theme';

import RecentlyPlayed from '../../components/RecentlyPlayed';
import TrendingMusic from '../../components/TrendingMusic';
import PopularArtist from '../../components/PopularArtist';
import AllMusic from '../../components/AllMusic';

const Home = ({navigation}: any) => {
  const [getTime, setGetTime] = useState('');

  useEffect(() => {
    const getLocalTime = new Date().getHours();
    if (getLocalTime <= 12) {
      setGetTime('Good morning 🌥️');
    } else if (getLocalTime > 12 && getLocalTime <= 18) {
      setGetTime('Good afternoon 🌤️');
    } else if (getLocalTime > 18 && getLocalTime <= 24) {
      setGetTime('Good evening ✨ ');
    } else {
      setGetTime('Good night 🌙');
    }
  }, [getTime]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar style={{width: 60, height: 60}}>{ProfileImage}</Avatar>
        <View style={styles.headerUserInfo}>
          <Heading
            isMuted={false}
            style={{fontSize: SIZES.lg, fontWeight: '600'}}>
            Hi, Afrizal Setya
          </Heading>
          <Heading isMuted={true} style={{fontSize: SIZES.base, marginTop: 3}}>
            {getTime}
          </Heading>
        </View>
      </View>

      <TrendingMusic {...navigation} />
      <PopularArtist {...navigation} />
      <RecentlyPlayed {...navigation} />
      <AllMusic {...navigation} />
    </ScrollView>
  );
};

export default Home;
