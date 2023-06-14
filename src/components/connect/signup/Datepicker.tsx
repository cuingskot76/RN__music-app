/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import Button from '../../atom/Button';

import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker';

const DatepickerSignUp = ({navigation}) => {
  const [date, setDate] = useState(new Date());

  // check if the user is 18 years old
  const checkYearsOld = useCallback(() => {
    const dateNow = new Date();
    const dateUser = new Date(date);
    const yearsOld = dateNow.getFullYear() - dateUser.getFullYear();
    const monthsOld = dateNow.getMonth() - dateUser.getMonth();
    const daysOld = dateNow.getDate() - dateUser.getDate();

    if (yearsOld < 18) {
      return false;
    } else if (yearsOld === 18) {
      if (monthsOld < 0) {
        return false;
      } else if (monthsOld === 0) {
        if (daysOld < 0) {
          return false;
        }
      }
    }

    return true;
  }, [date]);

  useEffect(() => {
    checkYearsOld();
  }, [checkYearsOld, date]);

  const handleNext = () => {
    navigation.navigate('GenderSignUp');
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
        What's your date of birth?
      </Text>

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
