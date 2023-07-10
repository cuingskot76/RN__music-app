/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useState} from 'react';

import Button from '../../atom/Button';
import Paragraf from '../../atom/Paragraf';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {create} from 'zustand';

import {COLORS, PADDING, SIZES} from '../../../constants/theme';

export const UseGenderStore = create(set => ({
  gender: '',
  setGender: (gender: string) => set({gender}),
}));

const GenderSignUp = ({navigation}: any) => {
  const [checked, setChecked] = useState('');
  const genders = ['Male', 'Female', 'Prefer not to say'];

  const handleNext = (gender: string) => {
    setChecked(gender);

    navigation.navigate('FinishingSignUp');
    UseGenderStore.setState({gender});
  };

  return (
    <View
      style={{
        padding: PADDING.lg,
        paddingTop: 150,
        height: '100%',
        backgroundColor: COLORS.dark,
      }}>
      <Paragraf
        style={{
          color: COLORS.white,
          fontSize: SIZES.lg,
          fontFamily: 'GothamBold',
        }}>
        What's your gender?
      </Paragraf>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: SIZES.base,
          flexWrap: 'wrap',
          marginTop: SIZES.xl,
        }}>
        {genders.map(item => {
          return (
            <Button
              key={item}
              title={item}
              colorText={checked === item ? COLORS.white : COLORS.mutedWhite}
              fontFamily="GothamBook"
              style={[
                {
                  paddingVertical: SIZES.sm,
                  paddingHorizontal: SIZES.xxl,
                  borderRadius: 50,
                  borderColor:
                    checked === item ? COLORS.lightGray : COLORS.darkGray,
                  borderWidth: 2,
                },
              ]}
              sizeText={16}
              handlePress={() => handleNext(item)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default GenderSignUp;
