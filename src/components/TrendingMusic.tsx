/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';
import axios from 'axios';

import {SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import UseFetch from '../hooks/UseFetch';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const TrendingMusic = navigation => {
  const {data, error} = UseFetch('/charts/track');

  const maxData = data?.tracks?.slice(0, 7);

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
                width={250}
                height={200}
                borderRadius={30}
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
            key={item?.id}
            onPress={() => navigation.navigate('DetailPlayer', {...item})}>
            <View style={styles.trendingMusicImageContainer}>
              <Figure alt="test">{item?.images?.coverart}</Figure>

              <View style={styles.trendingMusicDescriptionContainer}>
                <View style={{flex: 1}}>
                  <Heading
                    isMuted={false}
                    style={{
                      fontSize: SIZES.lg,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                    {item?.title.length > 15
                      ? item?.title.substring(0, 15) + '...'
                      : item?.title}
                  </Heading>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TrendingMusic;
