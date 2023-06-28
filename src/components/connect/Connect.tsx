/* eslint-disable react-native/no-inline-styles */
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../atom/Button';
import Heading from '../atom/Heading';

import {COLORS, PADDING, SIZES} from '../../constants/theme';

const Connect = ({navigation}: any) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <LinearGradient
        colors={[COLORS.dark2, COLORS.dark, COLORS.dark]}
        style={{
          paddingHorizontal: PADDING.xxl,
          flex: 1,
        }}>
        <Ionicons
          name="musical-notes"
          size={60}
          color={COLORS.white}
          style={{textAlign: 'center', paddingVertical: 150}}
        />
        <View style={{alignItems: 'center', gap: -5, marginBottom: SIZES.base}}>
          <Heading
            isMuted={false}
            isBold={true}
            style={{fontSize: SIZES.xxl, fontFamily: 'GothamBold'}}>
            Millions of songs.
          </Heading>
          <Heading
            isMuted={false}
            isBold={true}
            style={{fontSize: SIZES.xxl, fontFamily: 'GothamBook'}}>
            Free on Cuing.
          </Heading>
        </View>

        <View>
          <Button
            title="Sign up free"
            textWeight="600"
            style={{
              backgroundColor: COLORS.green,
              paddingVertical: PADDING.sm,
              borderRadius: 50,
              marginTop: 50,
              alignItems: 'center',
            }}
            colorText="black"
            handlePress={() => navigation.navigate('EmailSignUp')}
          />
          <Button
            title="Continue with phone number"
            textWeight="600"
            style={{
              paddingVertical: PADDING.base,
              borderRadius: 50,
              marginTop: 10,
              alignItems: 'center',
              borderColor: COLORS.dark2,
              borderWidth: 1,
              flexDirection: 'row-reverse',
              justifyContent: 'center',
            }}
            colorText={COLORS.white}
            icon={
              <Ionicons
                name="md-phone-portrait-outline"
                size={SIZES.xl}
                color="#fff"
              />
            }
            iconStyle={{position: 'absolute', right: 20}}
          />
          <Button
            title="Continue with Google"
            textWeight="600"
            style={{
              paddingVertical: PADDING.base,
              borderRadius: 50,
              marginTop: 10,
              alignItems: 'center',
              borderColor: COLORS.dark2,
              borderWidth: 1,
              flexDirection: 'row-reverse',
              justifyContent: 'center',
            }}
            colorText={COLORS.white}
            icon={
              <Image
                source={require('../../../public/images/googleLogo.png')}
              />
            }
            iconStyle={{position: 'absolute', right: 20}}
          />
          <Button
            title="Continue with Facebook"
            textWeight="600"
            style={{
              paddingVertical: PADDING.base,
              borderRadius: 50,
              marginTop: 10,
              alignItems: 'center',
              borderColor: COLORS.dark2,
              borderWidth: 1,
              flexDirection: 'row-reverse',
              justifyContent: 'center',
            }}
            colorText={COLORS.white}
            icon={
              <Image
                source={require('../../../public/images/facebookLogo.png')}
              />
            }
            iconStyle={{position: 'absolute', right: 20}}
          />
          <View
            style={{
              marginVertical: SIZES.xl,
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 10,
            }}>
            <Heading
              isMuted={false}
              style={{
                color: COLORS.white,
              }}>
              Already have an account?
            </Heading>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Heading
                isMuted={false}
                isBold={true}
                style={{color: COLORS.green}}>
                Log in
              </Heading>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default Connect;
