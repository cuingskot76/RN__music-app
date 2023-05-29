/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Button,
  ScrollView,
  Switch,
  Text,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import Datepicker from '../../components/Datepicker';

const Profile = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEnable, setIsEnable] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // const backAction = () => {
  //   Alert.alert('Hold on!, are you sure you want to go back?'),
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {
  //         text: "Yes, I'm sure",
  //         onPress: BackHandler.exitApp(),
  //       },
  //     ];
  //   return true;
  // };

  // const backHandler = BackHandler.addEventListener(
  //   'hardwareBackPress',
  //   backAction,
  // );

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <Button title="Show modal" onPress={toggleModal} />

      <View style={{marginBottom: 20}}>
        <Modal isVisible={isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>

            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </Modal>
      </View>

      <Datepicker />

      <View
        style={{
          alignItems: 'center',
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: isEnable ? 'green' : 'red',
          }}>
          Switch : {isEnable ? 'ON' : 'OFF'}
        </Text>
        <Switch
          onValueChange={() => setIsEnable(prev => !prev)}
          value={isEnable}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnable ? '#f5dd4b' : '#f4f3f4'}
        />
      </View>

      <View>
        <Button
          title="Show Alert"
          onPress={() =>
            Alert.alert('This is an alert', 'Hello World!', [
              {
                // onPress: () => console.log('OK Pressed'),
              },
            ])
          }
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
