/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import React from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';
import {SIZES} from '../constants/theme';
import Figure from './atom/Figure';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import UseFetch from '../hooks/UseFetch';

const RecentlyPlayed = (navigation: any) => {
  const {data, error} = UseFetch('/charts/track');

  const maxData = data?.tracks?.slice(6, 17);

  if (data === undefined) {
    return (
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: SIZES.lg}}
        renderItem={({item}) => (
          <View>
            <SkeletonPlaceholder
              borderRadius={4}
              backgroundColor="#41444B"
              highlightColor="#52575D">
              <View>
                <SkeletonPlaceholder.Item
                  width={200}
                  height={200}
                  borderRadius={10}
                />
                <SkeletonPlaceholder.Item
                  width={100}
                  height={20}
                  borderRadius={4}
                  marginTop={10}
                />
              </View>
            </SkeletonPlaceholder>
          </View>
        )}
      />
    );
  }

  if (error) {
    return (
      <View>
        <Text style={{color: 'red', fontSize: 35}}>Error...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={maxData}
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
              <Figure alt="test">{item?.images?.coverart}</Figure>
            </View>
            <View style={styles.recentlyPlayedDescriptionContainer}>
              <Heading
                isMuted={false}
                style={{
                  fontSize: SIZES.base,
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                {item?.title?.length > 15
                  ? item?.title?.substring(0, 15) + '...'
                  : item?.title}
              </Heading>
              <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                {item?.subtitle?.length > 20
                  ? item?.subtitle?.substring(0, 20) + '...'
                  : item?.subtitle}
              </Heading>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RecentlyPlayed;
