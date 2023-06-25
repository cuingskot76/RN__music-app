/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, SIZES} from '../constants/theme';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import axios from 'axios';
import {UseAccessTokenStore} from './connect/Login';

const RecentlyPopular = () => {
  const [data, setData] = useState(null);

  const url =
    'https://api.spotify.com/v1/playlists/37i9dQZF1DWSqBruwoIXkA/tracks';

  const accessToken = UseAccessTokenStore(state => state.accessToken);

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
              <Image
                source={{uri: item?.track?.album?.images?.[0]?.url}}
                alt="recently-played-image"
                style={{
                  width: 60,
                  height: 60,
                  resizeMode: 'cover',
                }}
              />
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: SIZES.xs,
                  fontWeight: '600',
                  flex: 1,
                }}>
                {item?.track?.name?.length > 15
                  ? item?.track?.name?.substring(0, 15) + '...'
                  : item?.track?.name}
              </Text>
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
      )}
    </View>
  );
};

export default RecentlyPopular;
