/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../screens/Home/Home.style';
import Heading from './atom/Heading';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {COLORS, SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import {API_URL, API_KEY, API_HOST} from '@env';
import PlayingMusic from './PlayingMusic';

// console.log(API_URL, API_KEY, API_HOST);

const AllMusic = () => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();

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
  // console.log(data);
  // if (error) {
  //   return (
  //     <View>
  //       <Text style={{color: 'red', fontSize: 35}}>Error...</Text>
  //     </View>
  //   );
  // }

  return (
    <View
      style={{
        marginBottom: 200,
      }}>
      <FlatList
        scrollEnabled={false}
        data={maxData}
        contentContainerStyle={{gap: SIZES.lg}}
        renderItem={({item}) => (
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
                  <TouchableOpacity
                  // onPress={() => <PlayingMusic item={item} />}
                  >
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
