/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Router, {HomeStack} from './router';
import {StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from './screens/Discover/Discover';
import Favorite from './screens/Favorite/Favorite';
import Profile from './screens/Profile/Profile';
import ButtonTab from './components/ButtonTab';
import {BlurView} from '@react-native-community/blur';
import PlayingMusic from './components/PlayingMusic';

const Tab = createBottomTabNavigator();

const BottomTabBar = item => {
  return <ButtonTab {...item} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} />

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

      {/* is playing music */}
      <View
        style={{
          marginHorizontal: 10,
        }}>
        <PlayingMusic />
      </View>
    </NavigationContainer>
  );
};

export default App;
