/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';
import {COLORS, SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import {recentlyPlayed} from '../constants';

import AntDesign from 'react-native-vector-icons/AntDesign';

const RecentlyPlayed = (navigation: any) => {
  return (
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
              marginRight: 5,
            }}>
            View all
          </Heading>
          <AntDesign name="right" size={13} color={COLORS.darkWhite} />
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
              {/* <Figure alt={item.title}>{item.image}</Figure> */}
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
  );
};

export default RecentlyPlayed;
