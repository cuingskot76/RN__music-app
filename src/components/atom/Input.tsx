/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput} from 'react-native';
import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon?: React.ReactNode;
}

const Input = ({
  label,
  secureTextEntry,
  onChangeText,
  placeholder,
  value,
  icon,
}: InputProps) => {
  return (
    <View>
      <Text style={{color: '#fff', fontWeight: 'bold', marginBottom: 10}}>
        {label}
      </Text>
      <View>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          style={{
            backgroundColor: '#fff',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderRadius: 5,
            marginBottom: 10,
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
