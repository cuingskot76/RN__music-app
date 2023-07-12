/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Button from '../../atom/Button';
import Paragraf from '../../atom/Paragraf';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Input from '../../atom/Input';

import {UseEmailStore} from './Email';
import {UsePasswordStore} from './Password';

import {auth} from '../../../../firebase';

import Modal from 'react-native-modal';

import LottieView from 'lottie-react-native';

import {COLORS, PADDING, SIZES} from '../../../constants/theme';

const FinishingSignUp = ({navigation}: any) => {
  const email = UseEmailStore(state => state?.email);
  const password = UsePasswordStore(state => state?.password);

  // extract first name from email
  const initialUsername = email?.split('@')[0];

  const [userProfile, setUserProfile] = useState(initialUsername);
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState({
    data: false,
    marketing: false,
  });
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(prev => !prev);
  };

  useEffect(() => {
    if (isModalVisible) {
      const timer = setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Login');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isModalVisible, navigation]);

  const handleRegister = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      showModal();
    } catch (err) {
      setError(err?.message);
    }
  };

  return (
    <View
      style={{
        padding: PADDING.lg,
        paddingTop: 150,
        height: '100%',
        backgroundColor: COLORS.dark,
      }}>
      <Modal
        isVisible={isModalVisible}
        animationIn={'zoomIn'}
        animationOut={'fadeOut'}
        animationInTiming={300}
        animationOutTiming={300}
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}>
        <View
          style={{
            backgroundColor: COLORS.dark,
            padding: PADDING.xl,
            borderRadius: 10,
          }}>
          <View style={{alignItems: 'center'}}>
            <LottieView
              source={require('../../../../public/assets/success.json')}
              autoPlay
              style={{width: 250, height: 250}}
            />

            <Paragraf
              style={{
                fontSize: SIZES.lg,
                color: COLORS.white,
                marginBottom: SIZES.base,
                fontFamily: 'CircularSpotifyTxT-Bold',
              }}>
              You're all set!
            </Paragraf>
            <Paragraf style={{fontSize: SIZES.sm, color: COLORS.white}}>
              Your account has been created.
            </Paragraf>
          </View>
        </View>
      </Modal>

      <Input
        label="What's your name?"
        value={userProfile}
        onChangeText={text => setUserProfile(text)}
      />

      <Paragraf style={{fontSize: SIZES.sm, color: COLORS.white}}>
        This appers on your Cuing profile.
      </Paragraf>

      <View
        style={{
          borderColor: COLORS.gray,
          marginTop: SIZES.xl,
          borderTopWidth: 1,
          paddingTop: PADDING.lg,
        }}>
        <View style={{gap: SIZES.lg}}>
          <Paragraf style={{fontSize: SIZES.sm, color: COLORS.white}}>
            By tapping "Create account", you agree to Cuing's Terms of Use.
          </Paragraf>
          <Button
            title="Terms of Use"
            colorText={COLORS.green}
            sizeText={SIZES.sm}
          />
        </View>
        <View style={{gap: SIZES.lg, marginTop: SIZES.lg}}>
          <Paragraf style={{fontSize: SIZES.sm, color: COLORS.white}}>
            By tapping "Create account", you agree to Cuing's Privacy Policy.
          </Paragraf>
          <Button
            title="Privacy Police"
            colorText={COLORS.green}
            sizeText={SIZES.sm}
          />
        </View>
      </View>

      <Button
        title="I would prefer not to receive marketing messages from Cuing."
        colorText={COLORS.white}
        sizeText={SIZES.sm}
        style={{
          marginTop: SIZES.xxl,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        textStyle={{
          width: '80%',
        }}
        handlePress={() => setIsChecked(prev => ({...prev, data: !prev.data}))}
        icon={
          isChecked.data ? (
            <AntDesign
              name="checkcircle"
              size={SIZES.xl}
              color={COLORS.green}
            />
          ) : (
            <View
              style={{
                borderRadius: 50,
                borderColor: COLORS.lightGray,
                borderWidth: 1,
                width: SIZES.xl,
                height: SIZES.xl,
              }}
            />
          )
        }
      />
      <Button
        title="Share my registration data with Cuing's content providers for marketing purposes."
        colorText={COLORS.white}
        sizeText={SIZES.sm}
        style={{
          marginTop: SIZES.lg,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        textStyle={{
          width: '80%',
        }}
        handlePress={() =>
          setIsChecked(prev => ({...prev, marketing: !prev.marketing}))
        }
        icon={
          isChecked.marketing ? (
            <AntDesign
              name="checkcircle"
              size={SIZES.xl}
              color={COLORS.green}
            />
          ) : (
            <View
              style={{
                borderRadius: 50,
                borderColor: COLORS.lightGray,
                borderWidth: 1,
                width: SIZES.xl,
                height: SIZES.xl,
              }}
            />
          )
        }
      />

      {error && (
        <Paragraf
          style={{
            color: COLORS.danger,
            fontSize: SIZES.sm,
            paddingTop: SIZES.xxl,
          }}>
          {error?.split('Firebase: ')[1]?.split('.')[0]?.replace('.', ' ')}
        </Paragraf>
      )}

      <View style={{alignItems: 'center'}}>
        <Button
          title="Create account"
          colorText={COLORS.dark}
          style={{
            marginTop: 100,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.lg,
            maxWidth: 150,
            paddingVertical: SIZES.xs,
            paddingHorizontal: SIZES.lg,
          }}
          handlePress={handleRegister}
        />
      </View>
    </View>
  );
};

export default FinishingSignUp;
