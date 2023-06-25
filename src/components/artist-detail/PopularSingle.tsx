/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../constants/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PopularSingle = single => {
  const artists = single?.map(item => item);
  console.log('single', artists);
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
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: SIZES.xl,
          }}>
          <Text style={{color: COLORS.white}}>1</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: SIZES.base,
            }}>
            {/* <Image
          source={require('../../public/images/artist-images/twice.jpg')}
          style={{
            width: 70,
            height: 70,
            resizeMode: 'cover',
          }}
        /> */}

            <View>
              <Text style={{color: COLORS.white, fontWeight: '500'}}>
                More & More
              </Text>
              <Text style={{color: COLORS.white}}>390,554,621</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopularSingle;
