/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Heading from './atom/Heading';
import {COLORS, SIZES} from '../constants/theme';
import Figure from './atom/Figure';
import {recentlyPlayed} from '../constants';

import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TrackPlayer, {
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
  State,
} from 'react-native-track-player';
import Snackbar from 'react-native-snackbar';

const DetailPlayer = ({navigation, route}: any) => {
  // const RAPID_API_KEY = '2a8b87c9e6msheba982000f2edccp1aa9bbjsn0ef24e840e21';
  // const RAPID_API_HOST = 'shazam-core.p.rapidapi.com';

  const [data, setData] = useState([]);
  const [likeSong, setLikeSong] = useState(false);

  const {title, performedBy, image} = route?.params;

  // const playbackState = usePlaybackState();

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       'https://shazam-core.p.rapidapi.com/v1/charts/world',
  //       {
  //         method: 'GET',
  //         headers: {
  //           'X-RapidAPI-Key':
  //             '2a8b87c9e6msheba982000f2edccp1aa9bbjsn0ef24e840e21',
  //           'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  //         },
  //       },
  //     );
  //     const res = await response.json();
  //     setData(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const setUpPlayer = async () => {
  //   try {
  //     // const track = {
  //     //   id: 'trackId',
  //     //   url: data.map(item => item?.url)[0],
  //     // };
  //     await TrackPlayer.setupPlayer();

  //     await TrackPlayer.add({url: data?.map(item => item?.url)[0]});
  //     await TrackPlayer.play();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const handleLike = () => {
    setLikeSong(prev => !prev);

    Snackbar.show({
      text: `${title} added to your liked songs`,
      duration: Snackbar.LENGTH_SHORT,
      action: {
        text: 'Undo',
        textColor: COLORS.white,
        onPress: () => {
          setLikeSong(prev => !prev);
        },
      },
    });
  };

  const handleRemoveLike = () => {
    setLikeSong(!likeSong);
  };

  return (
    <ScrollView
      style={{backgroundColor: COLORS.darkBlur, flex: 1, padding: SIZES.base}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color={COLORS.white} />
        </TouchableOpacity>
        <Heading
          isMuted={false}
          style={{fontSize: SIZES.lg, fontWeight: '600'}}>
          Now Playing
        </Heading>
        {likeSong ? (
          <TouchableOpacity onPress={() => handleRemoveLike()}>
            <AntDesign name="heart" size={30} color={COLORS.danger} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            // onPress={() => navigation.goBack()}
            onPress={() => handleLike()}>
            <AntDesign name="hearto" size={30} color={COLORS.white} />
          </TouchableOpacity>
        )}
      </View>

      <View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: SIZES.base,
          }}>
          <View
            style={{
              height: 350,
              width: 350,
              borderRadius: SIZES.lg,
              overflow: 'hidden',
            }}>
            {/* image */}
            <Figure alt="test-1">
              {recentlyPlayed.map(item => item.image)[0]}
            </Figure>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            marginVertical: SIZES.base,
          }}>
          <Heading
            isMuted={false}
            style={{fontSize: SIZES.lg, fontWeight: '600'}}>
            {title}
          </Heading>
          <Heading isMuted={true} style={{fontWeight: '600', marginTop: 5}}>
            {performedBy}
          </Heading>
        </View>
      </View>

      {/* slider */}
      <View>
        <Slider
          style={{
            width: '100%',
            height: 40,
            marginTop: SIZES.xxl,
            flexDirection: 'row',
          }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: SIZES.base,
          }}>
          <Text
            style={{
              color: COLORS.darkWhite,
            }}>
            00:00
          </Text>
          <Text
            style={{
              color: COLORS.darkWhite,
            }}>
            00:00
          </Text>
        </View>
      </View>

      {/* button */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: SIZES.base,
        }}>
        <TouchableOpacity>
          <Ionicons name="shuffle" size={30} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="stepbackward" size={30} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity
          // onPress={() => togglePlayback(playbackState)}
          onPress={() => setUpPlayer()}>
          <Ionicons name="play-circle" size={70} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="stepforward" size={30} color={COLORS.white} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="repeat" size={30} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailPlayer;
