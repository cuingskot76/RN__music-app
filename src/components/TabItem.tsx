import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../constants/theme';

interface TabItemProps {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  label: any;
}

import Icon from 'react-native-vector-icons/AntDesign';

const Home = ({isFocused}: {isFocused: boolean}) => {
  return isFocused ? (
    <Icon name="home" size={25} color={'#c4c4c4'} />
  ) : (
    <Icon name="home" size={25} color={'#828388'} />
  );
};

const Search = ({isFocused}: {isFocused: boolean}) => {
  return isFocused ? (
    <Icon name="search1" size={25} color={'#c4c4c4'} />
  ) : (
    <Icon name="search1" size={25} color={'#828388'} />
  );
};

const Favorite = ({isFocused}: {isFocused: boolean}) => {
  return isFocused ? (
    <Icon name="hearto" size={25} color={'#c4c4c4'} />
  ) : (
    <Icon name="hearto" size={25} color={'#828388'} />
  );
};

const Profile = ({isFocused}: {isFocused: boolean}) => {
  return isFocused ? (
    <Icon name="user" size={25} color={'#c4c4c4'} />
  ) : (
    <Icon name="user" size={25} color={'#828388'} />
  );
};

const getIcon = (label: string, isFocused: boolean) => {
  switch (label) {
    case 'Home':
      return <Home isFocused={isFocused} />;
    case 'Discover':
      return <Search isFocused={isFocused} />;
    case 'Favorite':
      return <Favorite isFocused={isFocused} />;
    case 'Profile':
      return <Profile isFocused={isFocused} />;
    default:
      return <Home isFocused={isFocused} />;
  }
};

const TabItem = ({isFocused, onPress, onLongPress, label}: TabItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      {getIcon(label, isFocused)}
      <Text style={isFocused ? styles.textFocused : styles.textUnfocused}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  textFocused: {
    color: '#c4c4c4',
    fontWeight: 'bold',
  },
  textUnfocused: {
    color: '#828388',
    fontWeight: 'normal',
  },
});
