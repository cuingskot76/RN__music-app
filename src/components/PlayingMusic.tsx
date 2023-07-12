/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES} from '../constants/theme';
import Heading from './atom/Heading';

import {useNavigation} from '@react-navigation/native';
import {UseMusic} from './home/AllMusic';

import AsyncStorage from '@react-native-async-storage/async-storage';

const PlayingMusic = () => {
  const singleMusic = UseMusic(state => state.music);
  const isPlaying = UseMusic(state => state.isPlaying);

  const navigation = useNavigation();

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('currentMusic');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData().then(res => {
      UseMusic.setState({music: res});
    });
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('PlayerDetail', {
          singleMusic: singleMusic,
        })
      }>
      <View style={styles.row}>
        <Image
          source={{uri: singleMusic?.track?.album?.images?.[0]?.url}}
          alt="playing-music"
          style={{
            width: 50,
            height: 50,
            marginLeft: 10,
            marginRight: 20,
            backgroundColor: COLORS.dark,
            borderRadius: 3,
          }}
        />
        <View style={styles.rightContainer}>
          <View>
            <Heading
              isMuted={false}
              style={{
                fontWeight: '500',
              }}>
              {singleMusic?.track?.name?.length > 20
                ? singleMusic?.track?.name?.substring(0, 20) + '...'
                : singleMusic?.track?.name}
            </Heading>
            <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
              {singleMusic?.track?.artists?.[0]?.name?.length > 15
                ? singleMusic?.track?.artists?.[0]?.name?.substring(0, 15) +
                  '...'
                : singleMusic?.track?.artists?.[0]?.name}
            </Heading>
          </View>

          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <AntDesign name="hearto" size={30} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => UseMusic.setState({isPlaying: !isPlaying})}>
              {isPlaying ? (
                <Ionicons name="pause" size={30} color={COLORS.white} />
              ) : (
                <Ionicons name="play" size={30} color={COLORS.white} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 75,
    // backgroundColor: COLORS.darkBlur,
    backgroundColor: COLORS.white,
    width: '100%',
    height: 70,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  image: {},
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around',
  },
});

export default PlayingMusic;
