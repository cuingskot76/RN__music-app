/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {COLORS, SIZES} from '../constants/theme';
import {popularArtists} from '../constants';
import Figure from './atom/Figure';

const PopularArtist = () => {
  return (
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
              marginRight: 5,
            }}>
            View all
          </Heading>
          <AntDesign name="right" size={13} color={COLORS.darkWhite} />
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
              {/* <Figure alt={item.name}>{item.image}</Figure> */}
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
  );
};

export default PopularArtist;
