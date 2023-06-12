/* eslint-disable react-native/no-inline-styles */
import {ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from 'react-native';

interface ButtonProps {
  title?: string;
  style?: ViewStyle | ViewStyle[];
  icon?: React.ReactNode;
  colorText?: 'black' | 'white';
  iconStyle?: ViewStyle | ViewStyle[];
  handlePress?: () => void;
}

const Button = ({
  style,
  handlePress,
  icon,
  title,
  colorText,
  iconStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity style={style}>
      <Text style={{color: colorText, fontWeight: 'bold'}}>{title}</Text>
      {icon && (
        <TouchableOpacity
          style={iconStyle}
          onPress={() => {
            if (handlePress) {
              handlePress();
            } else {
              return;
            }
          }}>
          {icon}
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default Button;
