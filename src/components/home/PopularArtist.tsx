/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

import {SIZES} from '../../constants/theme';
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
    // get artist id
    setData(result.data?.items?.map(item => item?.track?.artists?.[0]?.id));
  }, [accessToken]);

  const fetchArtists = useCallback(
    async (urls, setArtist) => {
      const res = await Promise.all(
        urls?.map(url =>
          axios(url, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }),
        ),
      );
      const artists = res?.map(item => item.data);
      setArtist(artists);
    },
    [accessToken],
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchArtists(artistUrl, setArtist);
    // * i don't know when i implement "artistUrl" in dependency array, it's always re-rendering
  }, [artistUrl?.length, fetchArtists]);

  console.log('artist', artist);

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
