/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Text, FlatList, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import styles from '../../screens/Home/Home.style';
import Heading from '../atom/Heading';

import {SIZES} from '../../constants/theme';
import Figure from '../atom/Figure';
import UseFetch from '../../hooks/UseFetch';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {UseAccessTokenStore} from '../connect/Login';
import axios from 'axios';

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
    const result = await axios(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    setData(result.data?.items?.map(item => item?.track?.artists?.[0]?.id));
  }, [accessToken, url]);

  // ! still rerendering
  const fetchArtists = useCallback(async () => {
    const artistData = await Promise.all(
      artistUrl?.map(url =>
        axios(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      ),
    );
    setArtist(artistData?.map(item => item.data));
  }, [accessToken, artistUrl]);

  useEffect(() => {
    fetchData();
    fetchArtists();
    // }, [fetchArtists, fetchData]);
  }, [fetchArtists]);

  console.log('artist', typeof artist);

  return (
    <View>
      {data === null ? (
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
      ) : (
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
                {/* <Figure alt={item.key}>{item?.images?.background}</Figure> */}

                <Image
                  source={{
                    uri: item?.images?.[0]?.url,
                  }}
                  alt="popular-artist"
                  style={{
                    width: 250,
                    height: 200,
                    borderRadius: 30,
                  }}
                />
              </View>

              {/* <Heading
                isMuted={true}
                style={{
                  fontSize: SIZES.base,
                  fontWeight: '600',
                  marginTop: 5,
                }}>
                {item?.artists?.[0]?.alias?.length > 10
                  ? `${item?.artists?.[0]?.alias?.slice(0, 10) + '...'}`
                  : item?.artists?.[0]?.alias}
              </Heading>
              <Text>Hello World</Text> */}
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default PopularArtist;
