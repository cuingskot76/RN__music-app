/* eslint-disable react-native/no-inline-styles */
import {
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../screens/Home/Home.style';
import Heading from '../atom/Heading';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES} from '../../constants/theme';
import Figure from '../atom/Figure';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import axios from 'axios';

import {API_URL, API_KEY, API_HOST} from '@env';
import {create} from 'zustand';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {UseAccessTokenStore} from '../connect/Login';

export const UseMusic = create(set => ({
  music: [],
  isPlaying: false,
  setMusic: music => set(state => ({music})),
  setIsPlaying: isPlaying => set(state => ({isPlaying})),
}));

const AllMusic = () => {
  const [data, setData] = useState(null);
  const [currentMusic, setCurrentMusic] = useState(null);

  const accessToken = UseAccessTokenStore(state => state.accessToken);

  const url =
    'https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks';

  const maxData = data?.slice(0, 20);

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

  const onHandlePress = async item => {
    if (currentMusic === item) {
      setCurrentMusic(null);
      UseMusic.setState({isPlaying: false});
    } else {
      setCurrentMusic(item);
      UseMusic.setState({music: item});
      UseMusic.setState({isPlaying: true});

      await AsyncStorage.setItem('currentMusic', JSON.stringify(item));
    }
  };

  // is playing music state from PlayingMusic component
  const isPlayingMusic = UseMusic(state => state.isPlaying);

  const onRenderItem = ({item}) => {
    const trackId = item?.track?.id;

    const isPlaying = currentMusic?.track?.id === trackId;
    console.log('test', isPlaying);

    return (
      <TouchableOpacity key={item.id}>
        <View style={styles.allMusicContainer}>
          <View style={styles.allMusicImageContainer}>
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

          <View style={styles.allMusicDescriptionContainer}>
            <View>
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
            <View>
              <TouchableOpacity onPress={() => onHandlePress(item)}>
                {isPlaying && isPlayingMusic ? (
                  <Ionicons
                    name="pause-circle"
                    size={45}
                    color={COLORS.white}
                  />
                ) : (
                  <AntDesign name="play" size={45} color={COLORS.white} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        marginBottom: 200,
      }}>
      {maxData ? (
        <FlatList
          scrollEnabled={false}
          data={maxData}
          contentContainerStyle={{gap: SIZES.lg}}
          renderItem={onRenderItem}
        />
      ) : (
        <ScrollView>
          {Array.from(Array(20).keys()).map((item, index) => (
            <View key={index}>
              <SkeletonPlaceholder
                borderRadius={4}
                backgroundColor="#41444B"
                highlightColor="#52575D">
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: SIZES.base,
                    justifyContent: 'space-between',
                    marginBottom: SIZES.lg,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: SIZES.base,
                    }}>
                    <SkeletonPlaceholder.Item
                      width={100}
                      height={100}
                      borderRadius={10}
                    />
                    <View>
                      <SkeletonPlaceholder.Item
                        width={150}
                        height={20}
                        borderRadius={4}
                        marginTop={10}
                      />
                      <SkeletonPlaceholder.Item
                        width={100}
                        height={20}
                        borderRadius={4}
                        marginTop={10}
                      />
                    </View>
                  </View>
                  <SkeletonPlaceholder.Item
                    width={50}
                    height={50}
                    borderRadius={50}
                  />
                </View>
              </SkeletonPlaceholder>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default AllMusic;
