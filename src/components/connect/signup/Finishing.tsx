/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Button from '../../atom/Button';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Input from '../../atom/Input';

const FinishingSignUp = ({navigation}) => {
  const [userProfile, setUserProfile] = useState('');
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
        label="What's your name?"
        value={userProfile}
        onChangeText={text => setUserProfile(text)}
      />
      <Text style={{color: 'white'}}>This appers on your Cuing profile.</Text>
      <View
        style={{
          borderColor: 'gray',
          marginTop: 15,
          borderTopWidth: 1,
          paddingTop: 20,
        }}>
        <View style={{gap: 20}}>
          <Text style={{color: 'white'}}>
            By tapping "Create account", you agree to Cuing's Terms of Use.
          </Text>
          <Button title="Terms of Use" colorText="#1db954" />
        </View>
        <View style={{gap: 20, marginTop: 20}}>
          <Text style={{color: 'white'}}>
            By tapping "Create account", you agree to Cuing's Privacy Policy.
          </Text>
          <Button title="Privacy Police" colorText="#1db954" />
        </View>
      </View>

      <View>
        <Button
          title="I would prefer not to receive marketing messages from Cuing."
          colorText="white"
          textWeight="normal"
          sizeText={12}
          style={{
            marginTop: 20,
          }}
          icon={
            <AntDesign
              name="checkcircle"
              size={25}
              color="#1db954"
              style={{}}
            />
          }
          iconStyle={{
            position: 'absolute',
            right: 0,
          }}
        />
        <Button
          title="Share my registration data with Cuing's content providers for marketing purposes."
          colorText="white"
          textWeight="normal"
          sizeText={12}
          style={{
            marginTop: 20,
          }}
          icon={
            <AntDesign
              name="checkcircle"
              size={25}
              color="#1db954"
              style={{}}
            />
          }
          iconStyle={{
            position: 'absolute',
            right: 0,
          }}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <Button
          title="Create account"
          colorText="black"
          sizeText={16}
          style={{
            marginTop: 100,
            backgroundColor: '#fff',
            borderRadius: 20,
            maxWidth: 150,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}
          handlePress={() => navigation.navigate('Connect')}
        />
      </View>
    </View>
  );
};

export default FinishingSignUp;
