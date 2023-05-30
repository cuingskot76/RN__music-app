/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../constants/theme';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import axios from 'axios';
import Figure from './atom/Figure';

import {API_URL, API_KEY, API_HOST} from '@env';

const RecentlyPopular = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `${API_URL}/charts/track`,
      params: {
        locale: 'ID',
        listId: 'ip-country-chart-ID',
        pageSize: '20',
        startFrom: '0',
      },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST,
      },
    };

    const fetchAllMusic = async () => {
      const res = await axios.request(options);
      const datas = await res.data;

      setData(datas);
    };
    fetchAllMusic();
  }, []);

  const maxData = data?.tracks?.slice(0, 6);

  if (data === undefined || data.length === 0) {
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

  // if (error) {
  //   return (
  //     <View>
  //       <Text style={{color: 'red', fontSize: 35}}>Error...</Text>
  //     </View>
  //   );
  // }

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
        {maxData?.map(item => (
          <View
            key={item?.tracks?.map(item => item?.key)}
            style={{
              flex: 1,
              flexDirection: 'row',
              backgroundColor: COLORS.darkBlur,
              alignItems: 'center',
              width: 200,
              height: 60,
              minWidth: 150,
              maxHeight: 60,
              borderRadius: 5,
              gap: SIZES.base,
            }}>
            <Figure
              alt="test"
              style={{
                width: 60,
                height: 60,
              }}>
              {item?.images?.coverart}
            </Figure>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.xs,
                fontWeight: '500',
                flex: 1,
              }}>
              {item?.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default RecentlyPopular;
