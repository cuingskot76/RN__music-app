/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import axios from 'axios';

import {API_URL, API_KEY, API_HOST} from '@env';
import {create} from 'zustand';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const UseMusic = create(set => ({
  music: [],
  isPlaying: false,
  setMusic: music => set(state => ({music})),
  setIsPlaying: isPlaying => set(state => ({isPlaying})),
}));

const AllMusic = () => {
  const [data, setData] = useState([]);
  const [currentMusic, setCurrentMusic] = useState(null);

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

  const maxData = data?.tracks;

  if (data === undefined) {
    return (
      // <FlatList
      //   data={[1, 2, 3, 4, 5, 6, 7]}
      //   contentContainerStyle={{gap: SIZES.lg}}
      //   renderItem={({item}) => (
      //     <View>
      //       <SkeletonPlaceholder
      //         borderRadius={4}
      //         backgroundColor="#41444B"
      //         highlightColor="#52575D">
      //         <View
      //           style={{
      //             flexDirection: 'row',
      //             alignItems: 'center',
      //             gap: SIZES.base,
      //             justifyContent: 'space-between',
      //           }}>
      //           <View
      //             style={{
      //               flexDirection: 'row',
      //               alignItems: 'center',
      //               gap: SIZES.base,
      //             }}>
      //             <SkeletonPlaceholder.Item
      //               width={100}
      //               height={100}
      //               borderRadius={10}
      //             />
      //             <View>
      //               <SkeletonPlaceholder.Item
      //                 width={150}
      //                 height={20}
      //                 borderRadius={4}
      //                 marginTop={10}
      //               />
      //               <SkeletonPlaceholder.Item
      //                 width={100}
      //                 height={20}
      //                 borderRadius={4}
      //                 marginTop={10}
      //               />
      //             </View>
      //           </View>
      //           <SkeletonPlaceholder.Item
      //             width={50}
      //             height={50}
      //             borderRadius={50}
      //           />
      //         </View>
      //       </SkeletonPlaceholder>
      //     </View>
      //   )}
      // />

      <ScrollView>
        {Array.from(Array(7).keys()).map((item, index) => (
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
    );
  }

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
    const adamId = item?.artists?.[0]?.adamid;

    const isPlaying = currentMusic?.artists?.[0]?.adamid === adamId;

    return (
      <TouchableOpacity key={item.id}>
        <View style={styles.allMusicContainer}>
          <View style={styles.allMusicImageContainer}>
            <Figure alt={item.title}>{item?.images?.coverart}</Figure>
          </View>

          <View style={styles.allMusicDescriptionContainer}>
            <View>
              <Heading
                isMuted={false}
                style={{
                  fontSize: SIZES.base,
                  fontWeight: 'bold',
                  marginBottom: 5,
                }}>
                {item?.title?.length > 15
                  ? item?.title?.substring(0, 15) + '...'
                  : item?.title}
              </Heading>
              <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                {item?.subtitle?.length > 25
                  ? item?.subtitle?.substring(0, 25) + '...'
                  : item?.subtitle}
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
      <FlatList
        scrollEnabled={false}
        data={maxData}
        contentContainerStyle={{gap: SIZES.lg}}
        renderItem={onRenderItem}
      />
    </View>
  );
};

export default AllMusic;
