/* eslint-disable react-native/no-inline-styles */
import {Alert, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {create} from 'zustand';

import AntDesign from 'react-native-vector-icons/AntDesign';

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

  const checkValidateEmail = (input: string) => {
    // only one @ and .
    const check = /^[\w.%+-]+@[\w.-]+(?:\.[\w-]+)+$/;

    if (check.test(input)) {
      setValidateEmail(true);
    } else {
      setValidateEmail(false);
    }
  };

  useEffect(() => {
    checkValidateEmail(email);
  }, [email]);

  const handleNext = async () => {
    try {
      // check if the email is alredy in the Firebase auth
      const userCredential = await auth?.fetchSignInMethodsForEmail(email);
      if (userCredential?.length > 0) {
        return Alert.alert(
          'This email is alredy connected to an account.',
          'Do you want to log in instead?',
          [
            {
              text: 'Go to login',
              onPress: () => navigation.navigate('Login'),
            },
            {
              text: 'Close',
              onPress: () => navigation.navigate('EmailSignUp'),
            },
          ],
        );
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
        marginTop: SIZES.xl,
        height: '100%',
        backgroundColor: COLORS.dark,
      }}>
      <Button
        style={{paddingBottom: PADDING.xl}}
        icon={
          <AntDesign name="arrowleft" size={SIZES.xl} color={COLORS.white} />
        }
        handlePress={() => navigation.goBack()}
      />

      <Input
        label="What's your email?"
        value={email}
        onChangeText={text => setEmail(text)}
      />

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
