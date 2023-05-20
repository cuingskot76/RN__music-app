/* eslint-disable react-native/no-inline-styles */
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';
import axios from 'axios';

import {SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import UseFetch from '../hooks/UseFetch';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const API_URL = 'https://shazam-core7.p.rapidapi.com';
const API_KEY = 'f69a77c58amsh3e82ea6b89ea77ap15dd27jsndf06105a4a90';
const API_HOST = 'shazam-core7.p.rapidapi.com';

const TrendingMusic = navigation => {
  const {data, error} = UseFetch('charts/get-top-songs-in-world');

  const detailMusicId = data?.map(item => item?.key)[0];

  useEffect(() => {
    const getDetailMusic = async () => {
      try {
        const response = await axios.get(`${API_URL}/songs/get_details`, {
          params: {id: detailMusicId},
          headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST,
          },
        });
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailMusic();
  }, [detailMusicId]);

  // console.log('id', detailMusicId);
  const maxData = data?.slice(0, 7);

  if (data === undefined) {
    return (
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
    );
  }

  if (error) {
    return (
      <View>
        <Text style={{color: 'red', fontSize: 35}}>Error...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={maxData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: SIZES.lg}}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item?.id}
            onPress={() => navigation.navigate('DetailPlayer', {...item})}>
            <View style={styles.trendingMusicImageContainer}>
              <Figure alt="test">{item?.share?.image}</Figure>

              <View style={styles.trendingMusicDescriptionContainer}>
                <View style={{flex: 1}}>
                  <Heading
                    isMuted={false}
                    style={{
                      fontSize: SIZES.lg,
                      fontWeight: 'bold',
                      marginBottom: 5,
                    }}>
                    {item?.title.length > 15
                      ? item?.title.substring(0, 15) + '...'
                      : item?.title}
                  </Heading>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TrendingMusic;
