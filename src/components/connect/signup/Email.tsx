/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {create} from 'zustand';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Modal from 'react-native-modal';

import Button from '../../atom/Button';
import Input from '../../atom/Input';
import Paragraf from '../../atom/Paragraf';

import {COLORS, PADDING, SIZES} from '../../../constants/theme';
import {auth} from '../../../../firebase';

export const UseEmailStore = create(set => ({
  email: '',
  setEmail: (email: string) => set({email}),
}));

const EmailSignUp = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [validateEmail, setValidateEmail] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const checkValidateEmail = (input: string) => {
    // only one @ and .
    const check = /^[\w.%+-]+@[\w.-]+(?:\.[\w-]+)+$/;

    if (check.test(input)) {
      setValidateEmail(true);
    } else {
      setValidateEmail(false);
    }
  };

  const toggleModal = () => {
    setModalVisible(prev => !prev);
  };

  useEffect(() => {
    checkValidateEmail(email);
  }, [email]);

  const handleNext = async () => {
    try {
      // check if the email is alredy in the Firebase auth
      const userCredential = await auth?.fetchSignInMethodsForEmail(email);
      if (userCredential?.length > 0) {
        // show the modal
        toggleModal();
      } else {
        UseEmailStore.setState({email});
        navigation.navigate('PasswordSignUp');
      }
    } catch (error) {
      console.log(error);
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
      {/* <Button
        style={{paddingBottom: PADDING.xl}}
        icon={
          <AntDesign name="arrowleft" size={SIZES.xl} color={COLORS.white} />
        }
        handlePress={() => navigation.goBack()}
      /> */}

      <Input
        label="What's your email?"
        value={email}
        onChangeText={text => setEmail(text)}
        autoFocus={true}
      />

      {/* the modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        onBackButtonPress={toggleModal}
        backdropOpacity={0.5}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.xs,
            padding: PADDING.xxl,
            width: '100%',
            alignItems: 'center',
          }}>
          <View style={{gap: SIZES.xxl}}>
            <Paragraf
              style={{
                color: COLORS.dark,
                fontSize: SIZES.base,
                fontFamily: 'GothamBold',
                textAlign: 'center',
              }}>
              This email is already connected to an account.
            </Paragraf>
            <Paragraf
              style={{
                color: COLORS.darkGray,
                fontSize: SIZES.sm,
                textAlign: 'center',
              }}>
              Do you want to log in instead?
            </Paragraf>
          </View>
          <View
            style={{
              marginTop: SIZES.xxl,
              alignItems: 'center',
              gap: SIZES.sm,
            }}>
            <Button
              title="GO TO LOGIN"
              colorText={COLORS.dark}
              sizeText={SIZES.base}
              style={{
                backgroundColor: COLORS.green,
                borderRadius: SIZES.lg,
                paddingVertical: SIZES.xs,
                paddingHorizontal: SIZES.lg,
              }}
              handlePress={() => {
                navigation.navigate('Login');
              }}
            />
            <Button
              title="CLOSE"
              colorText={COLORS.dark}
              style={{
                backgroundColor: COLORS.white,
                borderRadius: SIZES.lg,
                paddingVertical: SIZES.xs,
                paddingHorizontal: SIZES.lg,
              }}
              handlePress={toggleModal}
            />
          </View>
        </View>
      </Modal>

      <Paragraf style={{color: COLORS.white, fontSize: SIZES.sm}}>
        You'll need to confirm this email later.
      </Paragraf>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Button
          title="Next"
          colorText="black"
          sizeText={16}
          isDisabled={!validateEmail}
          style={[
            !validateEmail ? {opacity: 0.5} : {opacity: 1},
            {
              marginTop: SIZES.lg,
              alignItems: 'center',
              backgroundColor: COLORS.white,
              borderRadius: 20,
              maxWidth: 100,
              paddingVertical: 10,
              paddingHorizontal: 30,
            },
          ]}
          handlePress={handleNext}
        />
      </View>
    </View>
  );
};

export default EmailSignUp;
