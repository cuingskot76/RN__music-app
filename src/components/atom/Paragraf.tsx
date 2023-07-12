import {Text, TextStyle} from 'react-native';
import React from 'react';

interface ParagrafProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  fontFamily?: string;
}

const Paragraf = ({children, fontFamily, style}: ParagrafProps) => {
  const defaultFontFamily = {
    fontFamily: fontFamily || 'CircularSpotifyTxT-Book',
  };

  return <Text style={[defaultFontFamily, style]}>{children}</Text>;
};

export default Paragraf;
