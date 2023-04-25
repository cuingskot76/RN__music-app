/* eslint-disable react-native/no-inline-styles */
import {View, Image, TouchableOpacity, Text, TextStyle} from 'react-native';
import React from 'react';
import Heading from '../atom/Heading';
import Avatar from '../atom/Avatar';

interface CardProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
  title: string;
  performed: string;
  playIcon: string;
}

const Card = ({children, style, title, performed, playIcon}: CardProps) => {
  return (
    <TouchableOpacity>
      <Image source={} />
      <View>
        <View>
          <Heading isMuted={false}>{title}</Heading>
          <Heading isMuted={true}>{performed}</Heading>
        </View>
        <Avatar style={{height: 40, width: 40}}>{playIcon}</Avatar>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
