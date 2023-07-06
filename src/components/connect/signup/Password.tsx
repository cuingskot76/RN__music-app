/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useState, useEffect} from 'react';

import Button from '../../atom/Button';
import Input from '../../atom/Input';
import Paragraf from '../../atom/Paragraf';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS, PADDING, SIZES} from '../../../constants/theme';

import {create} from 'zustand';

export const UsePasswordStore = create(set => ({
  password: '',
  setPassword: (password: string) => set({password}),
}));

const PasswordSignUp = ({navigation}: any) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);

  const checkValidatePassword = (input: string) => {
    if (input.length >= 8) {
      setValidatePassword(false);
    } else {
      setValidatePassword(true);
    }
  };

  useEffect(() => {
    checkValidatePassword(password);
  }, [password]);

  const handleNext = () => {
    navigation.navigate('BirthSignUp');
    UsePasswordStore.setState({password});
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
        label="Password"
        value={password}
        secureTextEntry={showPassword ? false : true}
        onChangeText={text => setPassword(text)}
        icon={
          <Button
            icon={
              showPassword ? (
                <Ionicons name="eye-off-outline" size={30} color="#fff" />
              ) : (
                <Ionicons name="eye-outline" size={30} color="#fff" />
              )
            }
            handlePress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <Paragraf style={{color: COLORS.white, fontSize: SIZES.sm}}>
        Use at least 8 characters.
      </Paragraf>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Button
          title="Next"
          colorText="black"
          sizeText={16}
          isDisabled={validatePassword}
          style={[
            validatePassword ? {opacity: 0.5} : {opacity: 1, marginTop: 20},
            {
              marginTop: 20,
              alignItems: 'center',
              backgroundColor: '#fff',
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

export default PasswordSignUp;
