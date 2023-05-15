/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, Text} from 'react-native';
import React from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';

import {SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import UseFetch from '../hooks/UseFetch';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const TrendingMusic = (navigation: any) => {
  const url = 'https://shazam-core.p.rapidapi.com/v1/charts/world';
  const {data, error} = UseFetch(url, {
    headers: {
      'X-RapidAPI-Key': '2a8b87c9e6msheba982000f2edccp1aa9bbjsn0ef24e840e21',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
    },
  });

  const maxData = data?.slice(0, 7);

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
          <View key={item?.id}>
            <View style={styles.trendingMusicImageContainer}>
              <Figure alt="test">{item?.share?.image}</Figure>

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
                  <Heading isMuted={true} style={{fontSize: SIZES.base}}>
                    {item?.subtitle.length > 20
                      ? item?.subtitle.substring(0, 20) + '...'
                      : item?.subtitle}
                  </Heading>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default TrendingMusic;
