/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React, {useState} from 'react';
import Button from '../../atom/Button';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../atom/Input';

const EmailSignUp = ({navigation}) => {
  const [email, setEmail] = useState('');

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
        handlePress={() => navigation.navigate('Connect')}
      />

      <Input
        label="What's your email?"
        placeholder="Enter your email or username"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text
        style={{
          color: '#fff',
        }}>
        You'll need to confirm this email later.
      </Text>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Button
          title="Next"
          colorText="black"
          sizeText={16}
          style={{
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 20,
            maxWidth: 100,
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}
          handlePress={() => navigation.navigate('PasswordSignUp')}
        />
      </View>
    </View>
  );
};

export default EmailSignUp;
