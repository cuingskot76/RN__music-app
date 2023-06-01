/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES} from '../constants/theme';
import Heading from './atom/Heading';
import Figure from './atom/Figure';

import {useNavigation} from '@react-navigation/native';
import {UseMusic} from './AllMusic';

const PlayingMusic = () => {
  // const {data, error} = UseFetch('/charts/track');

  const singleMusic = UseMusic(state => state.music);
  const isPlaying = UseMusic(state => state.isPlaying);

  const {title, subtitle, images} = singleMusic;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('DetailPlayer', {
          title: title,
          subtitle: subtitle,
          images: images,
        })
      }>
      <View style={styles.row}>
        <Figure alt="test" style={styles.image}>
          {images?.coverart}
        </Figure>
        <View style={styles.rightContainer}>
          <View>
            <Heading
              isMuted={false}
              style={{
                fontWeight: '500',
              }}>
              {title?.length > 20 ? title.slice(0, 20) + '...' : title}
            </Heading>
            <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
              {subtitle}
            </Heading>
          </View>

          <TouchableOpacity style={styles.iconsContainer}>
            <AntDesign name="hearto" size={30} color={'white'} />
            <TouchableOpacity
              onPress={() => UseMusic.setState({isPlaying: !isPlaying})}>
              {isPlaying ? (
                <Ionicons name="pause" size={30} color={COLORS.white} />
              ) : (
                <Ionicons name="play" size={30} color={COLORS.white} />
              )}
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 75,
    backgroundColor: COLORS.darkBlur,
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
  image: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 20,
    backgroundColor: COLORS.dark,
    borderRadius: 3,
  },
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
