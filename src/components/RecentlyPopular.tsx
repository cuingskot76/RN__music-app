/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants/theme';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const RecentlyPopular = () => {
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
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: SIZES.sm,
          flex: 1,
          justifyContent: 'space-between',
          marginTop: SIZES.xxl,
        }}>
        {Array.from(Array(6).keys()).map((item, index) => (
          <View key={index}>
            <SkeletonPlaceholder
              borderRadius={4}
              backgroundColor="#41444B"
              highlightColor="#52575D">
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: COLORS.darkBlur,
                  alignItems: 'center',
                  width: 170,
                  height: 60,
                  minWidth: 50,
                  maxHeight: 60,
                  borderRadius: 5,
                  overflow: 'hidden',
                  gap: SIZES.base,
                }}
              />
            </SkeletonPlaceholder>
          </View>
        ))}
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text style={{color: 'red', fontSize: 35}}>Error...</Text>
      </View>
    );
  }

  const datas = [
    {
      id: 1,
      name: 'The Weeknd',
      image: require('../../public/images/recently-images/recently-1.jpg'),
    },
    {
      id: 2,
      name: 'Twice',
      image: require('../../public/images/recently-images/recently-2.jpg'),
    },
    {
      id: 3,
      name: 'BTS',
      image: require('../../public/images/recently-images/recently-3.jpg'),
    },
    {
      id: 4,
      name: 'Ariana Grande',
      image: require('../../public/images/recently-images/recently-4.jpg'),
    },
    {
      id: 5,
      name: 'Justin Bieber',
      image: require('../../public/images/recently-images/recently-5.jpg'),
    },
    {
      id: 6,
      name: 'Dua Lipa',
      image: require('../../public/images/recently-images/recently-3.jpg'),
    },
  ];

  return (
    <View
      style={{
        marginTop: SIZES.xxl,
      }}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: SIZES.sm,
        }}>
        {datas.map(item => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: COLORS.darkBlur,
              alignItems: 'center',
              width: 200,
              height: 60,
              minWidth: 170,
              maxHeight: 60,
              borderRadius: 5,
              overflow: 'hidden',
              gap: SIZES.base,
            }}>
            <Image
              source={item.image}
              style={{
                width: 60,
                height: 60,
              }}
            />
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.sm,
                fontWeight: '500',
              }}>
              {item.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecentlyPopular;
