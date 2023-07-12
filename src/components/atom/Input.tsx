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
  autoFocus?: boolean;
}

const Input = ({
  label,
  secureTextEntry,
  onChangeText,
  value,
  icon,
  autoFocus,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View>
      <Text
        style={{
          color: COLORS.white,
          marginBottom: 5,
          fontSize: SIZES.xl,
          fontFamily: 'CircularSpotifyTxT-Bold',
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
          autoFocus={autoFocus}
          style={{
            backgroundColor: isFocus ? COLORS.lightGray : COLORS.gray,
            paddingVertical: SIZES.xs,
            paddingHorizontal: SIZES.xs,
            borderRadius: 5,
            marginBottom: SIZES.xs,
            color: COLORS.white,
            fontFamily: 'CircularSpotifyTxT-Medium',
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
