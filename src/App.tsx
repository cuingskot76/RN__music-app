import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} />
      <Router />
    </NavigationContainer>
  );
};

export default App;
