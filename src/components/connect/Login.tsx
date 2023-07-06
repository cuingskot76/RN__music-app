/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Input from '../atom/Input';
import Button from '../atom/Button';

import {auth} from '../../../firebase';

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {COLORS, PADDING, SIZES} from '../../constants/theme';

import {create} from 'zustand';

export const UseAccessTokenStore = create(set => ({
  accessToken: '',
  tokenExp: '',
  setAccessToken: (token: string) => set({accessToken: token}),
  setTokenExp: (time: string) => set({tokenExp: time}),
}));

import {CLIENT_ID, CLIENT_SECRET} from '@env';

const Login = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState('Log in');

  const url = 'https://accounts.spotify.com/api/token';

  const handleLogin = async () => {
    setIsLogin('Logging in...');
    try {
      const authRes = await auth.signInWithEmailAndPassword(username, password);
      const user = authRes.user;

      if (user) {
        const getToken = await axios.post(
          url,
          {
            grant_type: 'client_credentials',
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );

        setIsLogin('Log in');

        if (getToken.status === 200) {
          const accessToken = getToken.data.access_token;
          const expirationTime = Math.floor(Date.now() / 1000) + 3600;

          const checkTokenIsExp = (token: string, expiredIn: any) => {
            const currentTime = Date.now();
            const exp = parseInt(expiredIn, 13) * 1000;

            if (currentTime >= exp) {
              AsyncStorage.removeItem('accessToken');
            } else {
              AsyncStorage.setItem('accessToken', token);
              UseAccessTokenStore.setState({accessToken: token});

              // because AsyncStorage only accept string, so we need to convert the expirationTime(by default is number) to string
              AsyncStorage.setItem('tokenExp', expirationTime.toString());
              UseAccessTokenStore.setState({tokenExp: expirationTime});
            }
          };

          checkTokenIsExp(accessToken, expirationTime);
        }
      }
    } catch (error: Error | any) {
      setIsLogin('Log in');
      if (error?.code === 'auth/invalid-email') {
        setErrorMessage('This email and password combination is incorrect.');
      } else if (error?.code === 'auth/wrong-password') {
        setErrorMessage('This email and password combination is incorrect.');
      } else if (error?.code === 'auth/user-not-found') {
        setErrorMessage('User not found');
      } else {
        setErrorMessage('Something went wrong');
      }
    }
  };

  return (
    <View
      style={{
        padding: PADDING.lg,
        height: '100%',
        backgroundColor: COLORS.dark,
        marginTop: SIZES.lg,
      }}>
      <Button
        style={{paddingBottom: PADDING.xl}}
        icon={
          <AntDesign name="arrowleft" size={SIZES.xl} color={COLORS.white} />
        }
        handlePress={() => navigation.navigate('Connect')}
      />

      <View style={{gap: SIZES.base}}>
        <Input
          label="Email or username"
          value={username}
          onChangeText={text => setUsername(text)}
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
      </View>

      {errorMessage && (
        <Text
          style={{
            color: COLORS.danger,
            fontSize: SIZES.sm,
            marginTop: 10,
            fontFamily: 'GothamBook',
          }}>
          {errorMessage}
        </Text>
      )}

      <View
        style={{
          alignItems: 'center',
          gap: SIZES.xxl,
        }}>
        <Button
          title={isLogin}
          isDisabled={
            username === '' || password === '' || isLogin === 'Logging in...'
              ? true
              : false
          }
          colorText={
            username === '' || password === '' ? COLORS.darkGray : COLORS.dark
          }
          style={{
            marginTop: SIZES.lg,
            alignItems: 'center',
            backgroundColor:
              username === '' || password === '' || isLogin === 'Logging in...'
                ? COLORS.dark2
                : COLORS.white,
            borderRadius: 50,
            paddingVertical: SIZES.sm,
            paddingHorizontal: SIZES.xxl,
          }}
          handlePress={handleLogin}
        />
        <Button
          title="Log in without password"
          colorText={COLORS.white}
          style={{
            borderColor: COLORS.dark2,
            borderWidth: 1,
            paddingVertical: SIZES.xs,
            paddingHorizontal: SIZES.base,
            borderRadius: 50,
          }}
          textWeight="700"
          sizeText={SIZES.xs}
        />
      </View>
    </View>
  );
};

export default Login;
