import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import DetailPlayer from '../components/DetailPlayer';
import ArtistDetail from '../components/ArtistDetail';
import Notification from '../components/Notification';
import Splash from '../components/Splash';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
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
        name="DetailPlayer"
        options={{
          headerShown: false,
        }}
        component={DetailPlayer}
      />
      <Stack.Screen
        name="DetailArtist"
        options={{
          headerShown: false,
        }}
        component={ArtistDetail}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return <View />;
};

export default Router;
