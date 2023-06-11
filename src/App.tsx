/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

const Tab = createBottomTabNavigator();

const BottomTabBar = item => {
  return <ButtonTab {...item} />;
};

const App = () => {
  const [token, setToken] = useState(null);
  return (
    <NavigationContainer>
      <StatusBar translucent={true} />

      {/* check the token, if exist redirect to home. Otherwise to login page*/}
      {token ? (
        <View>
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

          <View
            style={{
              marginHorizontal: 10,
            }}>
            <PlayingMusic />
          </View>
        </View>
      ) : (
        <View>
          <Connect />
        </View>
      )}
    </NavigationContainer>
  );
};

export default App;
