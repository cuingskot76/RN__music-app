import {ViewStyle, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native';

interface ButtonProps {
  title: string;
  style?: ViewStyle | ViewStyle[];
  icon?: React.ReactNode;
  colorText?: 'black' | 'white';
}

const Button = ({style, icon, title, colorText}: ButtonProps) => {
  return (
    <TouchableOpacity style={style}>
      <Text style={{color: colorText, fontWeight: 'bold'}}>{title}</Text>
      {icon && <View style={{position: 'absolute', right: 20}}>{icon}</View>}
    </TouchableOpacity>
  );
};

export default Button;
