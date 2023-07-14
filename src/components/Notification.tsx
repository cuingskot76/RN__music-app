/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, PADDING, SIZES} from '../constants/theme';
import Heading from './atom/Heading';

const Notification = ({navigation}) => {
  return (
    <View
      style={{
        padding: PADDING.lg,
        paddingTop: 60,
        height: '100%',
        backgroundColor: COLORS.dark,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={SIZES.xl} color={COLORS.white} />
      </TouchableOpacity>

      <View
        style={{
          marginTop: SIZES.lg,
        }}>
        <Heading
          isMuted={false}
          style={{fontSize: SIZES.xxl, fontFamily: 'CircularSpotifyTxT-Bold'}}>
          What's New
        </Heading>
        <Heading isMuted={true}>
          The latest releases from artists, podcasts, and shows you follow
        </Heading>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: SIZES.base,
        }}>
        <Heading
          isMuted={false}
          style={{
            fontSize: SIZES.lg,
            textAlign: 'center',
            marginBottom: SIZES.sm,
            fontFamily: 'CircularSpotifyTxT-Medium',
          }}>
          We don't have any updates for you yet
        </Heading>
        <Heading isMuted={true} style={{textAlign: 'center'}}>
          When there's news, we'll post it here. Follow your favorite artists
          and podcasts to stay up to date on them too.
        </Heading>
      </View>
    </View>
  );
};

export default Notification;
