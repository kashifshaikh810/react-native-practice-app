/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HOME_NAVIGATOR} from '../constants/routeName';

const DrawerNavigator = () => {
  const DrawerNav = createDrawerNavigator();
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}></DrawerNav.Screen>
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
