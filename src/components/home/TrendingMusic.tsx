/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Heading from '../atom/Heading';
import axios from 'axios';

import {SIZES} from '../../constants/theme';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {UseAccessTokenStore} from '../connect/Login';

const TrendingMusic = navigation => {
  const [data, setData] = useState(null);

  const accessToken = UseAccessTokenStore(state => state.accessToken);
  const url =
    'https://api.spotify.com/v1/playlists/37i9dQZF1DWWhB4HOWKFQc/tracks';

  const fetchData = useCallback(async () => {
    const result = await axios(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setData(result.data?.items);
  }, [accessToken, url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const maxData = data?.slice(0, 7);

  return (
    <View>
      {data === null ? (
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
      ) : (
        <FlatList
          data={maxData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: SIZES.lg}}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item?.id}
              onPress={() => navigation.navigate('DetailPlayer', {...item})}>
              <View
                style={{
                  height: 200,
                  width: 250,
                  borderRadius: 30,
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                <Image
                  source={{uri: item?.track?.album?.images[0]?.url}}
                  alt="trending"
                  style={{
                    width: 250,
                    height: 200,
                    borderRadius: 30,
                  }}
                />

                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    padding: SIZES.lg,
                    borderBottomStartRadius: 30,
                    borderBottomEndRadius: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flex: 1}}>
                    <Heading
                      isMuted={false}
                      style={{
                        fontSize: SIZES.lg,
                        fontWeight: 'bold',
                        marginBottom: 5,
                      }}>
                      {item?.track?.name}
                    </Heading>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default TrendingMusic;
