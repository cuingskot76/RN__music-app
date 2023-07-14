/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

import {COLORS, SIZES} from '../constants/theme';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import axios from 'axios';

import {UseAccessTokenStore} from './connect/Login';

import Paragraf from './atom/Paragraf';

const RecentlyPopular = () => {
  const [data, setData] = useState(null);

  const url =
    'https://api.spotify.com/v1/playlists/37i9dQZF1DWSqBruwoIXkA/tracks';

  const accessToken = UseAccessTokenStore(state => state?.accessToken);

  const fetchData = async () => {
    try {
      const result = await axios(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(result.data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const maxData = data?.slice(0, 6);

  return (
    <View
      style={{
        marginTop: SIZES.xxl,
      }}>
      {maxData ? (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: SIZES.sm,
          }}>
          {maxData?.map(item => (
            <View
              key={item?.track?.id}
              style={{
                flex: 1,
                flexDirection: 'row',
                backgroundColor: COLORS.dark3,
                alignItems: 'center',
                width: 200,
                height: 60,
                minWidth: 150,
                maxHeight: 60,
                borderRadius: 5,
                gap: SIZES.base,
              }}>
              <Image
                source={{uri: item?.track?.album?.images?.[0]?.url}}
                alt="recently-played-image"
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: 'cover',
                }}
              />
              <Paragraf
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.sm,
                  flex: 1,
                }}>
                {item?.track?.name?.length > 25
                  ? item?.track?.name?.substring(0, 25) + '...'
                  : item?.track?.name}
              </Paragraf>
            </View>
          ))}
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: SIZES.sm,
            flex: 1,
            justifyContent: 'space-between',
            marginTop: SIZES.xxl,
          }}>
          {Array.from(Array(6).keys()).map((_, index) => (
            <View key={index}>
              <SkeletonPlaceholder
                borderRadius={4}
                backgroundColor={COLORS.placeholder}
                highlightColor={COLORS.placeholder2}>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: COLORS.white,
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
      )}
    </View>
  );
};

export default RecentlyPopular;
