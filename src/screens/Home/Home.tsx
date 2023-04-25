/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Heading from '../../components/atom/Heading';
import styles from './Home.style';
import Avatar from '../../components/atom/Avatar';
import {ProfileImage} from '../../../public/images';
import {SIZES} from '../../constants/theme';
import {trendingMusic} from '../../constants';
import {ChevronRight, PlayIcon} from '../../../public/icons';

const Home = () => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Heading isMuted={false} style={{fontSize: SIZES.lg}}>
            Hi, Afrizal Setya
          </Heading>
          <Heading isMuted={false} style={{fontSize: SIZES.lg}}>
            {getTime}
          </Heading>
        </View>
        <Avatar style={{width: 60, height: 60}}>{ProfileImage}</Avatar>
      </View>

      <View>
        <View style={styles.trendingHeader}>
          <Heading
            isMuted={false}
            style={{fontSize: SIZES.xl, fontWeight: 'bold'}}>
            Trending right now
          </Heading>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Heading
              isMuted={true}
              style={{
                fontSize: SIZES.sm,
              }}>
              View all
            </Heading>
            <ChevronRight />
          </TouchableOpacity>
        </View>

        <FlatList
          data={trendingMusic}
          horizontal={true}
          contentContainerStyle={styles.trendingMusicContainer}
          renderItem={({item}) => (
            <View key={item.id}>
              <View style={styles.trendingMusicImageContainer}>
                <Image
                  source={item.image}
                  alt={item.title}
                  style={{height: '100%', width: '100%', resizeMode: 'cover'}}
                />
              </View>
              <View style={styles.trendingMusicDescriptionContainer}>
                <View style={{flex: 1}}>
                  <Heading
                    isMuted={false}
                    style={{fontSize: SIZES.base, fontWeight: 'bold'}}>
                    {item.title}
                  </Heading>
                  <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                    {item.performedBy.length > 20
                      ? item.performedBy.substring(0, 20) + '...'
                      : item.performedBy}
                  </Heading>
                </View>
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity style={styles.playIcon}>
                    <PlayIcon />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      <View>
        <View style={styles.recentlyPlayedHeader}>
          <Heading
            isMuted={false}
            style={{fontSize: SIZES.xl, fontWeight: 'bold'}}>
            Recently played
          </Heading>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Heading
              isMuted={true}
              style={{
                fontSize: SIZES.sm,
              }}>
              View all
            </Heading>
            <ChevronRight />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
