/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Button from '../../atom/Button';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {create} from 'zustand';

export const UseGenderStore = create(set => ({
  gender: '',
  setGender: (gender: string) => set({gender}),
}));

const GenderSignUp = ({navigation}) => {
  const [checked, setChecked] = useState('Male');
  const genders = ['Male', 'Female', 'Prefer not to say'];

  const handleNext = (gender: string) => {
    setChecked(gender);
    navigation.navigate('FinishingSignUp');
    UseGenderStore.setState({gender});
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

      <Text
        style={{
          color: '#fff',
        }}>
        What's your gender?
      </Text>

      {/* <View
        style={{
          flexDirection: 'row',
          gap: 20,
          flexWrap: 'wrap',
          marginTop: 20,
          padding: 20,
        }}>
        <Button
          title="Male"
          style={styles.button}
          colorText="white"
          sizeText={16}
          handlePress={() => navigation.navigate('FinishingSignUp')}
        />
        <Button
          title="Female"
          style={styles.button}
          colorText="white"
          sizeText={16}
        />
        <Button
          title="Prefer not to say"
          style={{
            maxWidth: 200,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 50,
            alignItems: 'center',
            borderColor: 'gray',
            borderWidth: 2,
            justifyContent: 'center',
            width: '100%',
          }}
          colorText="white"
          sizeText={16}
        />
      </View> */}

      {genders.map((item, index) => {
        return (
          <Button
            key={index}
            title={item}
            style={[
              styles.button,
              checked === item && {backgroundColor: '#fff'},
            ]}
            colorText={checked === index ? 'black' : 'white'}
            sizeText={16}
            handlePress={() => handleNext(item)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginTop: 20,
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 2,
    justifyContent: 'center',
    maxWidth: 100,
    width: '100%',
  },
});
export default GenderSignUp;
