/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../atom/Button';

const Connect = ({navigation}) => {
  return (
    <ScrollView
    // style={styles.container}
    >
      <LinearGradient colors={['#2a2a2a', '#0e0e0e']} style={styles.container}>
        <Ionicons
          name="musical-notes"
          size={50}
          color="#fff"
          style={styles.icon}
        />
        <View>
          <Text style={styles.title}>Millions of songs.</Text>
          <Text style={styles.title}>Free on Cuing.</Text>
        </View>
        <View>
          <Button
            title="Sign up free"
            style={styles.button}
            colorText="black"
            handlePress={() => navigation.navigate('EmailSignUp')}
          />
          <Button
            title="Continue with phone number"
            style={styles.buttonTransparent}
            colorText="white"
            icon={
              <Ionicons
                name="md-phone-portrait-outline"
                size={30}
                color="#fff"
              />
            }
            iconStyle={{position: 'absolute', right: 20}}
          />
          <Button
            title="Continue with Google"
            style={styles.buttonTransparent}
            colorText="white"
            icon={
              <Image
                source={require('../../../public/images/googleLogo.png')}
              />
            }
            iconStyle={{position: 'absolute', right: 20}}
          />
          <Button
            title="Continue with Facebook"
            style={styles.buttonTransparent}
            colorText="white"
            icon={
              <Image
                source={require('../../../public/images/facebookLogo.png')}
              />
            }
            iconStyle={{position: 'absolute', right: 20}}
          />
          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 10,
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: '#1db954', fontWeight: 'bold'}}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '100%',
  },
  icon: {
    textAlign: 'center',
    marginVertical: 150,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1db954',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 50,
    alignItems: 'center',
  },
  buttonTransparent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
});

export default Connect;
