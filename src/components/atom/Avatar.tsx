import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

interface AvatarProps {
  children: any;
  style?: {
    width: number;
    height: number;
  };
}

const Avatar = ({children, style}: AvatarProps) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Image source={children} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
