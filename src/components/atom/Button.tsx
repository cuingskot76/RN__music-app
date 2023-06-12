/* eslint-disable react-native/no-inline-styles */
import {ViewStyle, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native';

interface ButtonProps {
  title?: string;
  style?: ViewStyle | ViewStyle[];
  icon?: React.ReactNode;
  colorText?: 'black' | 'white';
  sizeText?: 16 | 18 | 20;
  iconStyle?: ViewStyle | ViewStyle[];
  handlePress?: () => void;
}

const Button = ({
  style,
  handlePress,
  icon,
  title,
  colorText,
  sizeText,
  iconStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={() => {
        if (handlePress) {
          handlePress();
        } else {
          return;
        }
      }}>
      <Text style={{color: colorText, fontWeight: 'bold', fontSize: sizeText}}>
        {title}
      </Text>
      {icon && <View style={iconStyle}>{icon}</View>}
    </TouchableOpacity>
  );
};

export default Button;
