/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Heading from './atom/Heading';
import {COLORS, SIZES} from '../constants/theme';

import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Snackbar from 'react-native-snackbar';
import {useNavigation} from '@react-navigation/native';
import {create} from 'zustand';

export const UseDetailPlayerStore = create(set => ({
  isTrue: false,
  setIsTrue: isTrue => set({isTrue}),
}));

const DetailPlayer = ({route}: any) => {
  const [likeSong, setLikeSong] = useState(false);

  const {singleMusic} = route?.params;
  const navigation = useNavigation();
  // const currentScreen =
  //   navigation.getState().routes[navigation.getState().index].name;

  const handleLike = () => {
    setLikeSong(prev => !prev);

    Snackbar.show({
      text: `added to your liked songs`,
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
          <TouchableOpacity onPress={() => handleLike()}>
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
            <Image
              source={{uri: singleMusic?.track?.album?.images?.[0]?.url}}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
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
            {singleMusic?.track?.name?.length > 20
              ? singleMusic?.track?.name?.substring(0, 20) + '...'
              : singleMusic?.track?.name}
          </Heading>
          <Heading isMuted={true} style={{fontWeight: '600', marginTop: 5}}>
            {singleMusic?.track?.artists?.[0]?.name?.length > 15
              ? singleMusic?.track?.artists?.[0]?.name?.substring(0, 15) + '...'
              : singleMusic?.track?.artists?.[0]?.name}
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
        <TouchableOpacity>
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
