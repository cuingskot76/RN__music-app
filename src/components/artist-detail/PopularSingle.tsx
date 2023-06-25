/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Heading from '../atom/Heading';

const PopularSingle = single => {
  // const artists = single?.single?.map(item =>
  //   item?.artists?.map(artist => artist?.name),
  // );

  // const singles = single?.single?.map(item => item?.name);

  const img = single?.single?.map(item =>
    item?.artists?.map(artist => artist?.name),
  );

  return (
    <View>
      <Text
        style={{
          color: COLORS.white,
          fontSize: SIZES.lg,
          marginTop: SIZES.xl,
          marginBottom: SIZES.base,
        }}>
        Popular
      </Text>

      <View
        style={
          {
            // flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'space-between',
          }
        }>
        {single?.single?.map((item, i) => (
          <TouchableOpacity
            key={i}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: SIZES.xl,
              marginBottom: SIZES.base,
            }}>
            <Text style={{color: COLORS.white}}>{i + 1}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: SIZES.base,
              }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                }}>
                <Image
                  source={{uri: item?.album?.images?.[0]?.url}}
                  alt={item?.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '75%',
                }}>
                <View>
                  <Heading
                    isMuted={false}
                    style={{
                      fontSize: SIZES.sm,
                      fontWeight: 'bold',
                    }}>
                    {item?.name?.length > 25
                      ? item?.name?.substring(0, 25) + '...'
                      : item?.name}
                  </Heading>
                  <Heading isMuted={true} style={{fontSize: SIZES.sm}}>
                    {item?.artists?.length > 3
                      ? item?.artists
                          ?.map(artist => artist?.name)
                          .slice(0, 3)
                          .join(' • ')
                      : item?.artists?.map(artist => artist?.name).join(' • ')}
                  </Heading>
                </View>

                <TouchableOpacity>
                  <Ionicons name="ellipsis-vertical" size={30} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PopularSingle;
