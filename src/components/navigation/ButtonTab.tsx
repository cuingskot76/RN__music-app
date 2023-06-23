import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import TabItem from './TabItem';
import {COLORS} from '../../constants/theme';

const ButtonTab = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const onFocused = state.index === index;

        const onHandlePress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!onFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onHandleLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            label={label}
            isFocused={onFocused}
            onPress={onHandlePress}
            onLongPress={onHandleLongPress}
          />
        );
      })}
    </View>
  );
};

export default ButtonTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.dark,
    justifyContent: 'space-between',
    height: 70,
    paddingHorizontal: 20,
    borderTopColor: COLORS.darkGray,
    borderTopWidth: 1,
  },
});
