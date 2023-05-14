/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {COLORS, SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import {allMusic} from '../constants';

const AllMusic = () => {
  return (
    <View>
      <View style={styles.allMusicHeader}>
        <Heading
          isMuted={false}
          style={{fontSize: SIZES.xl, fontWeight: 'bold'}}>
          All music
        </Heading>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'center',
          }}>
          <Heading
            isMuted={true}
            style={{
              fontSize: SIZES.sm,
              marginRight: 5,
            }}>
            View all
          </Heading>
          <AntDesign name="right" size={13} color={COLORS.darkWhite} />
        </TouchableOpacity>
      </View>

      <FlatList
        scrollEnabled={false}
        data={allMusic}
        contentContainerStyle={{gap: SIZES.lg}}
        renderItem={({item}) => (
          <TouchableOpacity key={item.id}>
            <View style={styles.allMusicContainer}>
              <View style={styles.allMusicImageContainer}>
                {/* <Figure alt={item.title}>{item.image}</Figure> */}
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
                    {item.title.length > 15
                      ? item.title.substring(0, 15) + '...'
                      : item.title}
                  </Heading>
                  <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                    {item.performedBy.length > 25
                      ? item.performedBy.substring(0, 25) + '...'
                      : item.performedBy}
                  </Heading>
                </View>
                <View>
                  <TouchableOpacity>
                    <AntDesign name="play" size={45} color={COLORS.white} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AllMusic;
