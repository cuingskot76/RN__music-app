/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet} from 'react-native';
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
  setAccessToken: (accessToken: string) => set({accessToken}),
}));

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
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

        // store access token in global state
        // UseAccessTokenStore.setState({
        //   accessToken: getToken.data.access_token,
        // });
        UseAccessTokenStore.setState({
          accessToken: getToken.data,
        });

        // await AsyncStorage.setItem('accessToken', getToken.data.access_token);
      }
    } catch (error) {
      console.log(error.message);
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
