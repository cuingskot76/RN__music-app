/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../screens/Home/Home.style';
import Heading from './Heading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../constants/theme';

interface SectionProps {
  headingName: string;
  headingViewAll: string;
}

const Section = ({headingName, headingViewAll}: SectionProps) => {
  return (
    <View style={styles.trendingHeader}>
      <Heading isMuted={false} style={{fontSize: SIZES.xl, fontWeight: 'bold'}}>
        {headingName}
      </Heading>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Heading
          isMuted={true}
          style={{
            fontSize: SIZES.sm,
            marginRight: 5,
          }}>
          {headingViewAll}
        </Heading>
        <AntDesign name="right" size={13} color={COLORS.darkWhite} />
      </TouchableOpacity>
    </View>
  );
};

export default Section;
