/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

import Button from '../../atom/Button';
import Paragraf from '../../atom/Paragraf';

import AntDesign from 'react-native-vector-icons/AntDesign';

import DatePicker from 'react-native-date-picker';

import {COLORS, PADDING, SIZES} from '../../../constants/theme';

const DatepickerSignUp = ({navigation}: any) => {
  const [date, setDate] = useState(new Date());
  const [isAdult, setIsAdult] = useState(false);

  // check if the user is 13 years old
  const checkYearsOld = useCallback(() => {
    const dateNow = new Date();
    const dateUser = new Date(date);
    const yearsOld = dateNow.getFullYear() - dateUser.getFullYear();
    const monthsOld = dateNow.getMonth() - dateUser.getMonth();
    const daysOld = dateNow.getDate() - dateUser.getDate();

    if (yearsOld < 13) {
      return setIsAdult(false);
    } else if (yearsOld === 13) {
      if (monthsOld < 0) {
        return setIsAdult(false);
      } else if (monthsOld === 0) {
        if (daysOld < 0) {
          return setIsAdult(false);
        }
      }
    }

    setIsAdult(true);
  }, [date]);

  useEffect(() => {
    checkYearsOld();
  }, [checkYearsOld]);

  const handleNext = () => {
    if (isAdult === true) {
      navigation.navigate('GenderSignUp');
    }
  };

  return (
    <View
      style={{
        padding: PADDING.lg,
        marginTop: SIZES.xl,
        height: '100%',
        backgroundColor: COLORS.dark,
      }}>
      <Button
        style={{paddingBottom: PADDING.xl}}
        icon={<AntDesign name="arrowleft" size={30} color={COLORS.white} />}
        handlePress={() => navigation.goBack()}
      />

      <Paragraf
        style={{
          color: COLORS.white,
          fontSize: SIZES.lg,
          fontFamily: 'GothamBold',
        }}>
        What's your date of birth?
      </Paragraf>

      <DatePicker
        style={{
          marginTop: 30,
          marginBottom: 30,
          alignSelf: 'center',
        }}
        date={date}
        onDateChange={setDate}
        androidVariant="nativeAndroid"
        mode="date"
        theme="dark"
        maximumDate={new Date()}
      />

      {!isAdult && (
        <Paragraf style={{color: COLORS.danger, fontSize: SIZES.sm}}>
          Sorry, you don't meet Cuing's age requirements
        </Paragraf>
      )}

      <View
        style={{
          alignItems: 'center',
        }}>
        <Button
          title="Next"
          colorText="black"
          sizeText={16}
          // isDisabled={!checkYearsOld()}
          style={{
            marginTop: 20,
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: 20,
            maxWidth: 100,
            paddingVertical: 10,
            paddingHorizontal: 30,
          }}
          handlePress={handleNext}
        />
      </View>
    </View>
  );
};

export default DatepickerSignUp;
