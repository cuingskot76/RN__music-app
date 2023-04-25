import {ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
}

const Button = ({children, style}: ButtonProps) => {
  return <TouchableOpacity style={style}>{children}</TouchableOpacity>;
};

export default Button;
