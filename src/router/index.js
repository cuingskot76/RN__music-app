import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import ArtistDetail from '../components/artist-detail/ArtistDetail';
import Notification from '../components/Notification';
import Connect from '../components/connect/Connect';
import Login from '../components/connect/Login';
import PlayerDetail from '../components/PlayerDetail';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
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
      <Stack.Screen
        name="Main"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PlayerDetail"
        options={{
          headerShown: false,
        }}
        component={PlayerDetail}
      />
      <Stack.Screen
        name="ArtistDetail"
        options={{
          headerShown: false,
        }}
        component={ArtistDetail}
      />
    </Stack.Navigator>
  );
};
