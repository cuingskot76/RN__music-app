/* eslint-disable react-native/no-inline-styles */
import {View, Image, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, SIZES} from '../../constants/theme';
import {UseAccessTokenStore} from '../connect/Login';
import axios from 'axios';
import PopularSingle from './PopularSingle';

const ArtistDetail = ({navigation, route}) => {
  const [data, setData] = useState(null);
  const [artistDetail, setArtistDetail] = useState(null);
  const {singleArtist} = route?.params;

  const artistId = singleArtist?.id;

  const accessToken = UseAccessTokenStore(state => state.accessToken);

  // actually, the market based on user location
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=ID`;
  const baseImgUrl = `https://api.spotify.com/v1/artists/${artistId}`;

  const fetchArtistDetail = async () => {
    try {
      const result = await axios(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setData(result.data?.tracks);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchArtistImg = async () => {
    try {
      const result = await axios(baseImgUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setArtistDetail(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtistDetail();
    fetchArtistImg();
  }, [url]);

  const maxData = data?.slice(0, 5);

  // get popular single
  const albumSingle = data?.filter(
    item => item?.album?.album_type === 'single',
  );

  console.log('alubm single', albumSingle);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.dark,
      }}>
      <Image
        source={{uri: artistDetail?.images?.[0]?.url}}
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
          {artistDetail?.name}
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
            {artistDetail?.followers?.total?.toLocaleString()} Followers
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

        {/* popular single */}
        <PopularSingle single={albumSingle} />
      </View>
    </View>
  );
};

export default ArtistDetail;
