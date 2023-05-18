/* eslint-disable react-native/no-inline-styles */
import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES} from '../constants/theme';

const ArtistDetail = ({navigation, route}) => {
  const {artists} = route?.params;

  const artist = artists[0];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.dark,
      }}>
      <Image
        source={require('../../public/images/artist-images/twice.jpg')}
        style={{
          width: '100%',
          height: 300,
          position: 'relative',
          resizeMode: 'cover',
        }}
      />

      <View
        style={{
          position: 'absolute',
          paddingTop: SIZES.lg,
          paddingHorizontal: SIZES.lg,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 50,
            padding: 10,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name="arrowleft" size={30} color={COLORS.white} />
        </TouchableOpacity>

        <Text
          style={{
            color: COLORS.white,
            fontSize: SIZES.xxl,
            marginTop: SIZES.lg,
            fontWeight: 'bold',
            paddingTop: 150,
          }}>
          Red Velvet
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: SIZES.lg,
        }}>
        {/* detail icon */}
        <View>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.sm,
              marginTop: SIZES.base,
            }}>
            7,731,948 monthly listeners
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: SIZES.base,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: SIZES.xxl,
              }}>
              <TouchableOpacity
                style={{
                  borderColor: COLORS.white,
                  borderWidth: 1,
                  borderRadius: 6,
                  paddingVertical: 5,
                  width: 80,
                }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: SIZES.base,
                    fontWeight: '500',
                    textAlign: 'center',
                  }}>
                  Follow
                </Text>
              </TouchableOpacity>
              <Ionicons name="ellipsis-vertical" size={30} color="white" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: SIZES.xl,
              }}>
              <TouchableOpacity>
                <Ionicons name="shuffle" size={35} color="#1ED760" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 50,
                  padding: 10,
                  width: 60,
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#1ED760',
                }}>
                <Ionicons name="play" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* popular */}
        <View>
          <Text
            style={{
              color: COLORS.white,
              fontSize: SIZES.lg,
              marginTop: SIZES.xl,
              // fontWeight: '500',
              marginBottom: SIZES.base,
            }}>
            Popular
          </Text>
        </View>
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
              <Image
                source={require('../../public/images/artist-images/twice.jpg')}
                style={{
                  width: 70,
                  height: 70,
                  resizeMode: 'cover',
                }}
              />

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
    </View>
  );
};

export default ArtistDetail;
