/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../atom/Button';
import Input from '../../atom/Input';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PasswordSignUp = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validatePassword, setValidatePassword] = useState(false);

  const checkValidatePassword = (input: string) => {
    if (input.length >= 8) {
      setValidatePassword(false);
    } else {
      setValidatePassword(true);
    }
  };

  useEffect(() => {
    checkValidatePassword(password);
  }, [password]);

  return (
    <View
      style={{
        padding: 20,
        height: '100%',
        backgroundColor: '#2a2a2a',
      }}>
      <Button
        style={{paddingBottom: 50}}
        icon={<AntDesign name="arrowleft" size={30} color="#fff" />}
        handlePress={() => navigation.goBack()}
      />

      <Input
        label="Password"
        value={password}
        secureTextEntry={showPassword ? false : true}
        onChangeText={text => setPassword(text)}
        icon={
          <Button
            icon={
              showPassword ? (
                <Ionicons name="eye-off-outline" size={30} color="#fff" />
              ) : (
                <Ionicons name="eye-outline" size={30} color="#fff" />
              )
            }
            handlePress={() => setShowPassword(!showPassword)}
          />
        }
      />

      <Text
        style={{
          color: '#fff',
        }}>
        Use at least 8 characters.
      </Text>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Button
          title="Next"
          colorText="black"
          sizeText={16}
          isDisabled={validatePassword}
          style={[
            validatePassword ? {opacity: 0.5} : {opacity: 1, marginTop: 20},
            {
              marginTop: 20,
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 20,
              maxWidth: 100,
              paddingVertical: 10,
              paddingHorizontal: 30,
            },
          ]}
          handlePress={() => navigation.navigate('BirthSignUp')}
        />
      </View>
    </View>
  );
};

export default PasswordSignUp;
