import {Image, StyleSheet, ImageSourcePropType, ImageStyle} from 'react-native';
import React from 'react';

interface FigureProps {
  children: ImageSourcePropType;
  style?: ImageStyle | ImageStyle[];
  alt: string;
}

const Figure = ({children, style, alt}: FigureProps) => {
  return (
    <Image source={children} alt={alt} style={[styles.container, style]} />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Figure;
