import {Text, TextStyle, StyleSheet} from 'react-native';
import React from 'react';

import {COLORS} from '../../constants/theme';

interface HeadingProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  isMuted: boolean;
  isBold?: boolean;
  fontFamily?: string;
}

const Heading = ({
  children,
  style,
  isMuted,
  isBold,
  fontFamily,
}: HeadingProps) => {
  const defaultFontFamily = {fontFamily: fontFamily || 'GothamMedium'};

  return (
    <Text
      style={[
        isMuted ? styles.mutedColor : styles.defaultColor,
        isBold && styles.bold,
        defaultFontFamily,
        style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultColor: {
    color: COLORS.white,
  },
  mutedColor: {
    color: COLORS.mutedWhite,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Heading;
