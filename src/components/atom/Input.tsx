/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constants/theme';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon?: React.ReactNode;
  // isFocus?: boolean;
  // onChangeFocus?: (focus: boolean) => void;
}

const Input = ({
  label,
  secureTextEntry,
  onChangeText,
  value,
  icon,
}: // isFocus,
// onChangeFocus,
InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View>
      <Text
        style={{
          color: COLORS.white,
          marginBottom: 5,
          fontSize: SIZES.xl,
          fontFamily: 'GothamBold',
        }}>
        {label}
      </Text>
      <View>
        <TextInput
          cursorColor={COLORS.white}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          style={{
            backgroundColor: isFocus ? COLORS.lightGray : COLORS.gray,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 5,
            marginBottom: 10,
            color: '#fff',
          }}
        />
        {icon && (
          <View
            style={{
              position: 'absolute',
              right: 10,
              top: -11,
            }}>
            {icon}
          </View>
        )}
      </View>
    </View>
  );
};

export default Input;
