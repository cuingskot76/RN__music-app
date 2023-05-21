/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../constants/theme';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import axios from 'axios';
import Figure from './atom/Figure';

const RecentlyPopular = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/charts/track',
      params: {
        locale: 'ID',
        listId: 'ip-country-chart-ID',
        pageSize: '20',
        startFrom: '0',
      },
      headers: {
        'X-RapidAPI-Key': 'f69a77c58amsh3e82ea6b89ea77ap15dd27jsndf06105a4a90',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
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
                fontSize: SIZES.sm,
                fontWeight: '500',
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
