/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import Datepicker from '../../components/Datepicker';

const Profile = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
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
    </View>
  );
};

export default Profile;
