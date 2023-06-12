/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Input from '../atom/Input';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Button from '../atom/Button';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        style={{paddingBottom: 50}}
        icon={<AntDesign name="arrowleft" size={30} color="#fff" />}
        handlePress={() => navigation.navigate('Connect')}
      />

      <Input
        label="Email or username"
        placeholder="Enter your email or username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Input
        label="Password"
        placeholder="Enter your password"
        value={password}
        secureTextEntry={showPass ? false : true}
        onChangeText={text => setPassword(text)}
        icon={
          <Button
            icon={
              showPass ? (
                <Ionicons name="eye-outline" size={30} color="#000" />
              ) : (
                <Ionicons name="eye-off-outline" size={30} color="#000" />
              )
            }
            handlePress={() => setShowPass(!showPass)}
          />
        }
      />
      <Button
        title="Log in"
        handlePress={() => navigation.navigate('Home')}
        style={{marginTop: 20, alignItems: 'center'}}
        colorText="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
    backgroundColor: '#2a2a2a',
  },
});

export default Login;
