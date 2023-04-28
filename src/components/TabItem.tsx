import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  SearchIcon,
  SearchIconActive,
  HomeIcon,
  HomeIconActive,
  PlayListIcon,
  PlayListIconActive,
  ProfileIcon,
  ProfileIconActive,
} from '../../public/icons';
import {COLORS} from '../constants/theme';

interface TabItemProps {
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  label: any;
}

const Home = ({isFocused}: {isFocused: boolean}) => {
  return isFocused ? <HomeIconActive /> : <HomeIcon />;
};

const Search = ({isFocused}: {isFocused: boolean}) => {
  return isFocused ? <SearchIconActive /> : <SearchIcon />;
};

const Playlist = ({isFocused}: {isFocused: boolean}) => {
  return isFocused ? <PlayListIconActive /> : <PlayListIcon />;
};

const Profile = ({isFocused}: {isFocused: boolean}) => {
  return isFocused ? <ProfileIconActive /> : <ProfileIcon />;
};

const getIcon = (label: string, isFocused: boolean) => {
  switch (label) {
    case 'Home':
      return <Home isFocused={isFocused} />;
    case 'Discover':
      return <Search isFocused={isFocused} />;
    case 'Playlist':
      return <Playlist isFocused={isFocused} />;
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
    color: COLORS.white,
    fontWeight: 'bold',
  },
  textUnfocused: {
    color: COLORS.darkWhite,
    fontWeight: 'normal',
  },
});
