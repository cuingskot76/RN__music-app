/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Heading from '../../components/atom/Heading';
import styles from './Home.style';
import Avatar from '../../components/atom/Avatar';
import {ProfileImage} from '../../../public/images';
import {COLORS, SIZES} from '../../constants/theme';
import {
  allMusic,
  popularArtists,
  recentlyPlayed,
  trendingMusic,
} from '../../constants';
import {ChevronRight} from '../../../public/icons';
import Figure from '../../components/atom/Figure';

import Icon from 'react-native-vector-icons/AntDesign';

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

      {/* trending music */}
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
              alignItems: 'center',
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
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: SIZES.lg}}
          renderItem={({item}) => (
            <View key={item.id}>
              <View style={styles.trendingMusicImageContainer}>
                <Figure alt={item.title}>{item.image}</Figure>
              </View>
              <View style={styles.trendingMusicDescriptionContainer}>
                <View style={{flex: 1}}>
                  <Heading
                    isMuted={false}
                    style={{
                      fontSize: SIZES.base,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                    {item.title.length > 15
                      ? item.title.substring(0, 15) + '...'
                      : item.title}
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Player')}>
                    <Icon name="play" size={45} color={COLORS.white} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      {/* popular artist */}
      <View>
        <View style={styles.popularArtistHeader}>
          <Heading
            isMuted={false}
            style={{fontSize: SIZES.xl, fontWeight: 'bold'}}>
            Popular artists
          </Heading>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
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
          data={popularArtists}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: SIZES.lg}}
          renderItem={({item}) => (
            <TouchableOpacity key={item.id} style={{alignItems: 'center'}}>
              <View style={styles.popularArtistImageContainer}>
                <Figure alt={item.name}>{item.image}</Figure>
              </View>

              <Heading
                isMuted={true}
                style={{
                  fontSize: SIZES.base,
                  fontWeight: '600',
                  marginTop: 5,
                }}>
                {item.name?.length > 11
                  ? item.name.substring(0, 11) + '...'
                  : item.name}
              </Heading>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* recently played */}
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
              alignItems: 'center',
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
          data={recentlyPlayed}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: SIZES.lg}}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate('DetailPlayer', {...item});
              }}>
              <View style={styles.recentlyPlayedImageContainer}>
                <Figure alt={item.title}>{item.image}</Figure>
              </View>
              <View style={styles.recentlyPlayedDescriptionContainer}>
                <Heading
                  isMuted={false}
                  style={{
                    fontSize: SIZES.base,
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}>
                  {item.title.length > 15
                    ? item.title.substring(0, 15) + '...'
                    : item.title}
                </Heading>
                <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                  {item.performedBy.length > 20
                    ? item.performedBy.substring(0, 20) + '...'
                    : item.performedBy}
                </Heading>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* all mucis */}
      <View>
        <View style={styles.allMusicHeader}>
          <Heading
            isMuted={false}
            style={{fontSize: SIZES.xl, fontWeight: 'bold'}}>
            All music
          </Heading>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              marginTop: 10,
              alignItems: 'center',
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
          scrollEnabled={false}
          data={allMusic}
          contentContainerStyle={{gap: SIZES.lg}}
          renderItem={({item}) => (
            <TouchableOpacity key={item.id}>
              <View style={styles.allMusicContainer}>
                <View style={styles.allMusicImageContainer}>
                  <Figure alt={item.title}>{item.image}</Figure>
                </View>

                <View style={styles.allMusicDescriptionContainer}>
                  <View>
                    <Heading
                      isMuted={false}
                      style={{
                        fontSize: SIZES.base,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      {item.title.length > 15
                        ? item.title.substring(0, 15) + '...'
                        : item.title}
                    </Heading>
                    <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                      {item.performedBy.length > 25
                        ? item.performedBy.substring(0, 25) + '...'
                        : item.performedBy}
                    </Heading>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Icon name="play" size={45} color={COLORS.white} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
