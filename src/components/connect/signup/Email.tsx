/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../../atom/Button';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../atom/Input';

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

  console.log(validateEmail);

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
          handlePress={() => navigation.navigate('PasswordSignUp')}
        />
      </View>
    </View>
  );
};

export default EmailSignUp;
