/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeName';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/ContactsDetails';
import CreateContact from '../screens/CreateContact';
import PrivetSettings from '../screens/PrivetSettings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen
        name={CONTACT_LIST}
        component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name={CONTACT_DETAILS}
        component={ContactDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name={CREATE_CONTACT}
        component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen
        name={SETTINGS}
        component={PrivetSettings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
