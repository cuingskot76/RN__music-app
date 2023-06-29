/* eslint-disable react-native/no-inline-styles */
import {ViewStyle, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native';

interface ButtonProps {
  title?: string;
  style?: ViewStyle | ViewStyle[];
  icon?: React.ReactNode;
  colorText?: 'black' | 'white' | string;
  sizeText?: 12 | 16 | 18 | 20;
  textWeight?: 'bold' | 'normal' | '600' | '700';
  iconStyle?: ViewStyle | ViewStyle[];
  handlePress?: () => void;
  isDisabled?: boolean;
  fontFamily?: string;
}

const Button = ({
  style,
  handlePress,
  icon,
  title,
  colorText,
  sizeText,
  iconStyle,
  textWeight,
  isDisabled,
  fontFamily,
}: ButtonProps) => {
  const defaultFontFamily = {fontFamily: fontFamily || 'GothamBold'};

  return (
    <TouchableOpacity
      style={style}
      disabled={isDisabled}
      onPress={() => {
        if (handlePress) {
          handlePress();
        } else {
          return;
        }
      }}>
      <Text
        style={[
          defaultFontFamily,
          {color: colorText, fontWeight: textWeight, fontSize: sizeText},
        ]}>
        {title}
      </Text>
      {icon && <View style={iconStyle}>{icon}</View>}
    </TouchableOpacity>
  );
};

export default Button;
