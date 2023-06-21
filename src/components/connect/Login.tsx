/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Input from '../atom/Input';
import Button from '../atom/Button';
import {auth} from '../../../firebase';
import axios from 'axios';
import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UseAccessTokenStore = create(set => ({
  accessToken: '',
  expiresIn: '',
  setAccessToken: (accessToken: string) => set({accessToken}),
  setExpiresIn: (expiresIn: string) => set({expiresIn}),
}));

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const url = 'https://accounts.spotify.com/api/token';

  const handleLogin = async () => {
    try {
      const authRes = await auth.signInWithEmailAndPassword(username, password);
      const user = authRes.user;
      // const userToken = await user.getIdToken();

      if (user) {
        const getToken = await axios.post(
          url,
          {
            grant_type: 'client_credentials',
            client_id: 'e317e0a987b6488f9c235d5444c0355e',
            client_secret: '4de6e0416f374ace9530187888aa831c',
          },
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        );

        const expirationTime = Math.floor(Date.now() / 1000) + 3600;

        if (getToken.status === 200) {
          // UseAccessTokenStore.setState({
          //   accessToken: getToken?.data?.access_token,
          //   // convert exp to string, because AsyncStorage only accept string
          //   expiresIn: expirationTime.toString(),
          // });

          AsyncStorage.setItem('accessToken', getToken?.data?.access_token);
          AsyncStorage.setItem('expires_in', expirationTime.toString());
        }
      }
    } catch (error) {
      if (error.code === 'auth/invalid-email') {
        setErrorMessage('Email is not valid');
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage('User not found');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Password is incorrect');
      } else {
        setErrorMessage('Something went wrong');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button
        style={{paddingBottom: 50}}
        icon={<AntDesign name="arrowleft" size={30} color="#fff" />}
        handlePress={() => navigation.navigate('Connect')}
      />

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
      {errorMessage && (
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 10,
          }}>
          <Text style={{color: 'red'}}>{errorMessage}</Text>
        </View>
      )}
      <View
        style={{
          alignItems: 'center',
        }}>
        <Button
          title="Login"
          colorText="black"
          sizeText={16}
          style={{
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 20,
            maxWidth: 150,
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}
          handlePress={handleLogin}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: '#2a2a2a',
  },
});

export default Login;
