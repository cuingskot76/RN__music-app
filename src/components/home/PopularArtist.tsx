/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {SIZES} from '../../constants/theme';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {UseAccessTokenStore} from '../connect/Login';
import axios from 'axios';
import Heading from '../atom/Heading';

const PopularArtist = navigation => {
  const [data, setData] = useState(null);
  const [artist, setArtist] = useState<object[]>([]);

  const accessToken = UseAccessTokenStore(state => state.accessToken);
  const url =
    'https://api.spotify.com/v1/playlists/37i9dQZF1DWWhB4HOWKFQc/tracks';

  const maxData = data?.slice(0, 10);

  const artistUrl = maxData?.map(
    id => `https://api.spotify.com/v1/artists/${id}`,
  );

  const fetchData = useCallback(async () => {
    try {
      const result = await axios(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // get artist id
      setData(result.data?.items?.map(item => item?.track?.artists?.[0]?.id));
    } catch (error) {
      console.log(error);
    }
  }, [accessToken]);

  const fetchArtists = useCallback(
    async urls => {
      try {
        const result = await Promise.all(
          urls?.map(url =>
            axios(url, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }),
          ),
        );
        setArtist(result?.map(item => item?.data));
      } catch (error) {
        console.log(error);
      }
    },
    [accessToken],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchArtists(artistUrl);
    // * i don't know when i implement "artistUrl" in dependency array, it's always re-rendering
  }, [artistUrl?.length, fetchArtists]);

  return (
    <View>
      {data ? (
        <FlatList
          data={artist}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: SIZES.lg}}
          renderItem={({item}) => (
            <TouchableOpacity
              // key={item.id}
              style={{alignItems: 'center'}}
              onPress={() => navigation.navigate('DetailArtist', {...item})}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  overflow: 'hidden',
                }}>
                <Image
                  source={{
                    uri: item?.images?.[0]?.url,
                  }}
                  alt="popular-artist"
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
              </View>

              <Heading
                isMuted={true}
                style={{
                  fontSize: SIZES.sm,
                  fontWeight: '600',
                  marginTop: 5,
                }}>
                {item?.name?.length > 15
                  ? `${item?.name?.slice(0, 10)}...`
                  : item?.name}
              </Heading>
            </TouchableOpacity>
          )}
        />
      ) : (
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
                  height={100}
                  width={100}
                  borderRadius={50}
                />
              </SkeletonPlaceholder>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default PopularArtist;
