/* eslint-disable react-native/no-inline-styles */
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Heading from '../../components/atom/Heading';
import {COLORS, SIZES} from '../../constants/theme';

import RecentlyPlayed from '../../components/RecentlyPlayed';
import TrendingMusic from '../../components/TrendingMusic';
import PopularArtist from '../../components/PopularArtist';
import AllMusic from '../../components/AllMusic';
import Section from '../../components/atom/Section';

import Ionicons from 'react-native-vector-icons/Ionicons';
import RecentlyPopular from '../../components/RecentlyPopular';

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
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.dark,
        paddingHorizontal: SIZES.lg,
        paddingTop: SIZES.lg,
        paddingBottom: SIZES.xxl,
      }}>
      <StatusBar
        translucent={true}
        backgroundColor={COLORS.dark}
        barStyle={'light-content'}
      />
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.xxl,
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../../public/images/profile-image/profile.jpg')}
            style={{width: 60, height: 60, borderRadius: 50}}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: SIZES.lg,
          }}>
          <View>
            <Heading
              isMuted={false}
              style={{fontSize: SIZES.lg, fontWeight: '600'}}>
              Hi, Afrizal Setya
            </Heading>
            <Heading
              isMuted={true}
              style={{fontSize: SIZES.base, marginTop: 3}}>
              {getTime}
            </Heading>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Ionicons name="notifications-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <RecentlyPopular />
      </View>

      <View>
        <Section headingName="Trending right now" headingViewAll="View all" />
        <TrendingMusic {...navigation} />
      </View>

      <View>
        <Section headingName="Popular artist" headingViewAll="View all" />
        <PopularArtist {...navigation} />
      </View>

      <View>
        <Section headingName="Recently played" headingViewAll="View all" />
        <RecentlyPlayed {...navigation} />
      </View>

      <View>
        <Section headingName="All music" headingViewAll="View all" />
        <AllMusic {...navigation} />
      </View>
    </ScrollView>
  );
};

export default Home;
