/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView, Image, View, Text} from 'react-native';
import Button from '../../components/atom/Button';
import {COLORS} from '../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UseAccessTokenStore} from '../../components/connect/Login';

const Profile = () => {
  const [data, setData] = useState([]);

  const handleLogOut = () => {
    AsyncStorage.removeItem('accessToken');
    UseAccessTokenStore.setState({accessToken: null});

    AsyncStorage.removeItem('tokenExp');
    UseAccessTokenStore.setState({tokenExp: null});
  };

  const fetchDataProfile = async () => {
    try {
      const res = await fetch('http://10.0.2.2:3000/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const dataJson = await res.json();
      setData(dataJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataProfile();
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: COLORS.dark,
      }}>
      <Image
        source={require('../../../public/images/profile-image/me.png')}
        style={{width: 200, height: 200, borderRadius: 100, marginTop: 20}}
      />

      {data
        ? data?.map(item => (
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  marginTop: 20,
                  marginBottom: 5,
                  fontWeight: 'bold',
                }}>
                {item?.name}
              </Text>
              <Text style={{color: 'white', fontSize: 16}}>{item?.nim}</Text>
            </View>
          ))
        : null}

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
