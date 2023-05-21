/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import React from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';

import {SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import UseFetch from '../hooks/UseFetch';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PopularArtist = navigation => {
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
              <SkeletonPlaceholder.Item
                height={100}
                width={100}
                borderRadius={50}
              />
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
            style={{alignItems: 'center'}}
            onPress={() => navigation.navigate('DetailArtist', {...item})}>
            <View style={styles.popularArtistImageContainer}>
              <Figure alt={item.key}>{item?.images?.background}</Figure>
            </View>

            <Heading
              isMuted={true}
              style={{
                fontSize: SIZES.base,
                fontWeight: '600',
                marginTop: 5,
              }}>
              {item?.artists?.[0]?.alias?.length > 10
                ? `${item?.artists?.[0]?.alias?.slice(0, 10) + '...'}`
                : item?.artists?.[0]?.alias}
            </Heading>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PopularArtist;
