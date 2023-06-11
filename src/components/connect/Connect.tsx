import {View, ScrollView, Text, StyleSheet} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Connect = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Ionicons name="musical-notes" size={30} color="black" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Connect;
