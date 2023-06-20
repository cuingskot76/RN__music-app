/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './router';
import {StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from './screens/Discover/Discover';
import Favorite from './screens/Favorite/Favorite';
import Profile from './screens/Profile/Profile';
import ButtonTab from './components/ButtonTab';
import PlayingMusic from './components/PlayingMusic';
import Connect from './components/connect/Connect';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login, {UseAccessTokenStore} from './components/connect/Login';
import EmailSignUp from './components/connect/signup/Email';
import PasswordSignUp from './components/connect/signup/Password';
import DatepickerSignUp from './components/connect/signup/Datepicker';
import GenderSignUp from './components/connect/signup/Gender';
import FinishingSignUp from './components/connect/signup/Finishing';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabBar = item => {
  return <ButtonTab {...item} />;
};

const App = () => {
  const [token, setToken] = useState(null || String);
  // get full token from global state (accessToken, expires_in, token_type)
  // const getToken = UseAccessTokenStore(state => state?.accessToken);

  // set access token to asycn storage
  // AsyncStorage.setItem('accessToken', getToken?.access_token);

  // get access_token from async storage
  // AsyncStorage.getItem('accessToken').then(value => {
  //   if (value) {
  //     setToken(value);
  //   }
  // });

  // check if access token is expired
  // const checkToken = (token, expiredIn) => {
  //   const currentTime = Math.floor(Date.now() / 1000);
  //   const expirationTime = currentTime + expiredIn;

  //   console.log('currentTime', new Date(currentTime * 1000));
  //   console.log('expirationTime', new Date(expirationTime * 1000));

  //   if (currentTime >= expirationTime) {
  //     setToken(null);
  //   } else {
  //     setToken(token);
  //   }
  // };

  // useEffect(() => {
  //   checkToken(getToken, getToken?.expires_in);
  // }, [getToken]);

  // check if access token is expired
  const checkToken = (token: any, expiredIn: number) => {
    const currentTime = Math.floor(Date.now() / 1000);
    const expirationTime = currentTime + expiredIn;

    console.log('currentTime', new Date(currentTime * 1000));
    console.log('expirationTime', new Date(expirationTime * 1000));

    console.log('token', token);

    if (currentTime >= expirationTime) {
      setToken(null);
      // console.log('token expired');
    } else {
      setToken(token);
      // console.log('token not expired');
    }
  };

  useEffect(() => {
    checkToken(
      AsyncStorage.getItem('accessToken').then(value => {
        return value;
      }),
      3600,
    );
  }, []);

  return (
    <NavigationContainer>
      <StatusBar translucent={true} />

      {/* check the token, if exist redirect to home. Otherwise to login page*/}
      {token ? (
        <Tab.Navigator tabBar={props => BottomTabBar(props)}>
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Discover"
            component={Discover}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Favorite"
            component={Favorite}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      ) : (
        // <View
        //   style={{
        //     marginHorizontal: 10,
        //   }}>
        //   <PlayingMusic />
        // </View>
        <Stack.Navigator initialRouteName="Connect">
          <Stack.Screen
            name="Connect"
            component={Connect}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          {/* signup-screen__start */}
          <Stack.Screen
            name="EmailSignUp"
            component={EmailSignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PasswordSignUp"
            component={PasswordSignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BirthSignUp"
            component={DatepickerSignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="GenderSignUp"
            component={GenderSignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="FinishingSignUp"
            component={FinishingSignUp}
            options={{
              headerShown: false,
            }}
          />
          {/* signup-screen__end */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
