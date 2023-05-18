/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Text, FlatList} from 'react-native';
import React from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';
import {COLORS, SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import {recentlyPlayed} from '../constants';

import AntDesign from 'react-native-vector-icons/AntDesign';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RecentlyPlayed = (navigation: any) => {
  const url = 'https://shazam-core.p.rapidapi.com/v1/charts/world';
  // const {data, error} = UseFetch(url, {
  //   headers: {
  //     'X-RapidAPI-Key': '2a8b87c9e6msheba982000f2edccp1aa9bbjsn0ef24e840e21',
  //     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  //   },
  // });
  const data = undefined;
  const error = false;

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
