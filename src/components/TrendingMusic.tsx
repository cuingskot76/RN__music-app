/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, FlatList, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {trendingMusic} from '../constants';
import {COLORS, SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import UseFetch from '../hooks/UseFetch';

const TrendingMusic = (navigation: any) => {
  const url = 'https://shazam-core.p.rapidapi.com/v1/charts/world';
  const {data, error} = UseFetch(url, {
    headers: {
      'X-RapidAPI-Key': '2a8b87c9e6msheba982000f2edccp1aa9bbjsn0ef24e840e21',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
    },
  });
  // console.log(data === undefined ? 'loading' : 'loaded');

  if (data === undefined) {
    return (
      <View>
        <Text style={{color: 'red', fontSize: 35}}>Loading...</Text>
      </View>
    );
  }
  return (
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
              marginRight: 5,
            }}>
            View all
          </Heading>
          <AntDesign name="right" size={13} color={COLORS.darkWhite} />
        </TouchableOpacity>
      </View>

      {/* <FlatList
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
                <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                  <AntDesign name="play" size={45} color={COLORS.white} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      /> */}

      <FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: SIZES.lg}}
        // initialNumToRender={5}
        // maxToRenderPerBatch={5}
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
