import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../components/Splash';
import Home from '../screens/Home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import Discover from '../screens/Discover/Discover';
import ButtonTab from '../components/ButtonTab';
import Favorite from '../screens/Favorite/Favorite';
import DetailPlayer from '../components/DetailPlayer';
import ArtistDetail from '../components/ArtistDetail';
import Notification from '../components/Notification';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const BottomTabBar = item => {
//   return <ButtonTab {...item} />;
// };

export const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
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

// const BottomNavigator = () => {
//   return (
//     <Tab.Navigator tabBar={props => BottomTabBar(props)}>
//       <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
//       <Tab.Screen
//         name="Discover"
//         component={Discover}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Favorite"
//         component={Favorite}
//         options={{headerShown: false}}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{headerShown: false}}
//       />
//     </Tab.Navigator>
//   );
// };

const Router = () => {
  return (
    // <Stack.Navigator initialRouteName="Main">
    //   <Stack.Screen
    //     name="Splash"
    //     options={{headerShown: false}}
    //     component={Splash}
    //   />
    //   <Stack.Screen
    //     name="Main"
    //     options={{headerShown: false}}
    //     component={BottomNavigator}
    //   />
    //   <Stack.Screen
    //     name="DetailPlayer"
    //     options={{
    //       headerShown: false,
    //     }}
    //     component={DetailPlayer}
    //   />
    //   <Stack.Screen
    //     name="DetailArtist"
    //     options={{
    //       headerShown: false,
    //     }}
    //     component={ArtistDetail}
    //   />
    //   <Stack.Screen
    //     name="Notification"
    //     options={{
    //       headerShown: false,
    //     }}
    //     component={Notification}
    //   />
    // </Stack.Navigator>
    <View></View>
  );
};

export default Router;
