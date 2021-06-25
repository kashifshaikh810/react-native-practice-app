import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../comman/modal';
import CustomButton from '../../components/comman/customButton/index';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <CustomButton
      title="Open Modal"
      primary
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ContactsComponent;
