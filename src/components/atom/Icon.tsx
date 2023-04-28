import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface IconProps {
  children: any;
  style: {
    width: number;
    height: number;
    backgroundColor: string;
  };
  handlePress?: () => void;
}

const Icon = ({children, style, handlePress}: IconProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={handlePress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;
