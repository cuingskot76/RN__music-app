import {Text, TextStyle, StyleSheet} from 'react-native';
import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  isMuted: boolean;
}

const Heading = ({children, style, isMuted}: HeadingProps) => {
  return (
    <Text style={[isMuted ? styles.mutedColor : styles.defaultColor, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultColor: {
    color: '#fcfcff',
  },
  mutedColor: {
    color: '#c4c4c4',
  },
});

export default Heading;
