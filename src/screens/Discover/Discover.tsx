/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from '../../components/atom/Icon';
import {CloseIcon, SearchIcon} from '../../../public/icons';
import styles from './Discover.style';
import {COLORS} from '../../constants/theme';

const Discover = () => {
  const [handleChangeInput, setHandleChangeInput] = useState('');
  const [isInputChanges, setIsInputChanges] = useState(false);

  const onHandleChangeInput = (text: string) => {
    setHandleChangeInput(text);
    if (text.length > 0) {
      setIsInputChanges(true);
    } else {
      setIsInputChanges(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.searchContainer}>
          <Icon
            style={{
              backgroundColor: 'transparent',
              height: 50,
              width: 50,
            }}>
            <SearchIcon />
          </Icon>
          <TextInput
            placeholderTextColor={COLORS.darkWhite}
            placeholder="What do you want to listen to?"
            style={styles.searchInput}
            value={handleChangeInput}
            onChangeText={onHandleChangeInput}
          />
          {isInputChanges && (
            <Icon
              style={{backgroundColor: 'transparent', height: 50, width: 50}}>
              <CloseIcon />
            </Icon>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Discover;
