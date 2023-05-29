/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES} from '../constants/theme';
import Heading from './atom/Heading';
import UseFetch from '../hooks/UseFetch';
import Figure from './atom/Figure';

const PlayingMusic = () => {
  const {data, error} = UseFetch('/charts/track');

  const maxData = data?.tracks?.[6];
  // console.log(maxData);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Figure alt="test" style={styles.image}>
          {maxData?.images?.background}
        </Figure>
        <View style={styles.rightContainer}>
          <View>
            <Heading
              isMuted={false}
              style={{
                fontWeight: '500',
              }}>
              {maxData?.title}
            </Heading>
            <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
              {maxData?.subtitle}
              {/* {maxData?.subtitle?.split(' ').slice(0, 2).join(' ')} */}
            </Heading>
          </View>

          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={30} color={'white'} />
            <Ionicons name="play" size={30} color={COLORS.white} />
          </View>
        </View>
      </View>
    </View>
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
