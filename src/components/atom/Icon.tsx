import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

interface IconProps {
  children: any;
  style: {
    width: number;
    height: number;
    backgroundColor: string;
  };
}

const Icon = ({children, style}: IconProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
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
