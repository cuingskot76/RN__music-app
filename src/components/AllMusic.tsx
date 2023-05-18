/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, ScrollView, FlatList, Text} from 'react-native';
import React from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {COLORS, SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import {allMusic} from '../constants';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const AllMusic = () => {
  const url = 'https://shazam-core.p.rapidapi.com/v1/charts/world';
  // const {data, error} = UseFetch(url, {
  //   headers: {
  //     'X-RapidAPI-Key': '2a8b87c9e6msheba982000f2edccp1aa9bbjsn0ef24e840e21',
  //     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  //   },
  // });
  const data = undefined;
  const error = false;

  const maxData = data?.slice(0, 7);

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
