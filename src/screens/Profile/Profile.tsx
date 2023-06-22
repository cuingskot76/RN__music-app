/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  View,
} from 'react-native';
import Button from '../../components/atom/Button';
import {COLORS} from '../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {UseAccessTokenStore} from '../../components/connect/Login';

const Profile = () => {
  // const res = UseAccessTokenStore(state => state.accessToken);

  const handleLogOut = () => {
    AsyncStorage.removeItem('accessToken');
    UseAccessTokenStore.setState({accessToken: null});

    AsyncStorage.removeItem('tokenExp');
    UseAccessTokenStore.setState({tokenExp: null});
  };
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.dark,
      }}>
      <Button
        title="Log out"
        colorText={COLORS.white}
        style={{
          marginTop: 20,
          alignItems: 'center',
          backgroundColor: COLORS.danger,
          borderRadius: 20,
          maxWidth: 150,
          paddingVertical: 10,
          paddingHorizontal: 30,
        }}
        handlePress={handleLogOut}
      />
    </ScrollView>
  );
};

export default Profile;
