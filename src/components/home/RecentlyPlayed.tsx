/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from '../../screens/Home/Home.style';
import Heading from '../atom/Heading';
import {SIZES} from '../../constants/theme';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {UseAccessTokenStore} from '../connect/Login';
import axios from 'axios';

const RecentlyPlayed = (navigation: any) => {
  const [data, setData] = useState(null);
  const accessToken = UseAccessTokenStore(state => state.accessToken);

  const url =
    'https://api.spotify.com/v1/playlists/37i9dQZF1E36r8XV5PiKRr/tracks';

  const maxData = data?.slice(0, 7);

  const fetchData = useCallback(async () => {
    try {
      const result = await axios(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(result?.data?.items);
    } catch (error) {
      console.log(error);
    }
  }, [accessToken]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
      ) : (
        <FlatList
          data={maxData}
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
                <Image
                  source={{uri: item?.track?.album?.images?.[0]?.url}}
                  alt="recently-played-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View style={styles.recentlyPlayedDescriptionContainer}>
                <Heading
                  isMuted={false}
                  style={{
                    fontSize: SIZES.base,
                    fontWeight: '600',
                    marginBottom: 5,
                  }}>
                  {item?.track?.name?.length > 15
                    ? item?.track?.name?.substring(0, 15) + '...'
                    : item?.track?.name}
                </Heading>
                <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                  {item?.track?.artists?.[0]?.name?.length > 15
                    ? item?.track?.artists?.[0]?.name?.substring(0, 15) + '...'
                    : item?.track?.artists?.[0]?.name}
                </Heading>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default RecentlyPlayed;
