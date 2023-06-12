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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './components/connect/Login';
import EmailSignUp from './components/connect/signup/Email';
import PasswordSignUp from './components/connect/signup/Password';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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
            name="Signup"
            component={EmailSignUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Password"
            component={PasswordSignUp}
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
