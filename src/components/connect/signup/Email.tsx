/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {create} from 'zustand';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Button from '../../atom/Button';
import Input from '../../atom/Input';

export const UseEmailStore = create(set => ({
  email: '',
  setEmail: (email: string) => set({email}),
}));

const EmailSignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [validateEmail, setValidateEmail] = useState(false);

  const checkValidateEmail = (input: string) => {
    const re = /\S+@\S+\.\S+/;
    if (re.test(input)) {
      setValidateEmail(false);
    } else {
      setValidateEmail(true);
    }
  };

  useEffect(() => {
    checkValidateEmail(email);
  }, [email]);

  const handleNext = () => {
    UseEmailStore.setState({email});
    navigation.navigate('PasswordSignUp');
  };

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
        label="What's your email?"
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
          isDisabled={validateEmail}
          style={[
            validateEmail ? {opacity: 0.5} : {opacity: 1, marginTop: 20},
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
          handlePress={handleNext}
        />
      </View>
    </View>
  );
};

export default EmailSignUp;
