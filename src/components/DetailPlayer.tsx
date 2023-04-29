/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Heading from './atom/Heading';
import {COLORS, SIZES} from '../constants/theme';
import {ChevronLeft, FavoriteIcon} from '../../public/icons';
import Icon from './atom/Icon';
import Figure from './atom/Figure';
import {recentlyPlayed} from '../constants';

const DetailPlayer = ({navigation, route}: any) => {
  const {title, performedBy, image} = route?.params;

  return (
    <ScrollView
      style={{backgroundColor: COLORS.darkBlur, flex: 1, padding: SIZES.base}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Icon handlePress={() => navigation.goBack()}>
          <ChevronLeft />
        </Icon>
        <Heading
          isMuted={false}
          style={{fontSize: SIZES.lg, fontWeight: '600'}}>
          Now Playing
        </Heading>
        <Icon style={{backgroundColor: COLORS.dark, height: 40, width: 40}}>
          <FavoriteIcon />
        </Icon>
      </View>

      <View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: SIZES.base,
          }}>
          <View
            style={{
              height: 350,
              width: 350,
              borderRadius: SIZES.lg,
              overflow: 'hidden',
            }}>
            <Figure alt="test-1">
              {recentlyPlayed.map(item => item.image)[0]}
            </Figure>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: SIZES.base,
          }}>
          <Heading
            isMuted={false}
            style={{fontSize: SIZES.lg, fontWeight: '600'}}>
            {title}
          </Heading>
          <Heading isMuted={true} style={{fontWeight: '600', marginTop: 5}}>
            {performedBy}
          </Heading>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailPlayer;
