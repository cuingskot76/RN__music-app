/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from './router';
import {StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from './screens/Discover/Discover';
import Favorite from './screens/Favorite/Favorite';
import Profile from './screens/Profile/Profile';
import ButtonTab from './components/navigation/ButtonTab';
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
import {COLORS} from './constants/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabBar = item => {
  return <ButtonTab {...item} />;
};

const App = () => {
  const accessToken = UseAccessTokenStore(state => state.accessToken);
  const tokenExp = UseAccessTokenStore(state => state.tokenExp);

  AsyncStorage.getItem('accessToken').then(value => {
    // get the token from async storage and set it to the store
    // so, when the app is reloaded, the token will be still there
    UseAccessTokenStore.setState({accessToken: value});
  });

  AsyncStorage.getItem('tokenExp').then(value => {
    UseAccessTokenStore.setState({tokenExp: value});
  });

  const checkIfTokenExpired = useCallback(() => {
    // check if the token is expired
    if (tokenExp) {
      // change the string tokenExp to number
      const tokenExpDate = Number(tokenExp);
      const currentTime = Math.floor(Date.now() / 1000);

      if (currentTime >= tokenExpDate) {
        AsyncStorage.removeItem('accessToken');
        UseAccessTokenStore.setState({accessToken: null});

        AsyncStorage.removeItem('tokenExp');
        UseAccessTokenStore.setState({tokenExp: null});
      }
    }
  }, [tokenExp]);

  useEffect(() => {
    // run the function above when with interval of every 1 second
    const interval = setInterval(() => {
      checkIfTokenExpired();
    }, 1000);
    return () => clearInterval(interval);
  }, [checkIfTokenExpired]);

  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        backgroundColor={COLORS.dark}
        barStyle={'light-content'}
      />

      {/* check the token, if exist redirect to home. Otherwise to login page*/}
      {accessToken ? (
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
