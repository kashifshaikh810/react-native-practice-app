import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HOME} from '../constants/routeName';
import HomeNavigator from '../navigations/HomeNavigator';

const DrawerNavigator = () => {
  const DrawerNav = createDrawerNavigator();
  return (
    <DrawerNav.Navigator drawerType="slide">
      <DrawerNav.Screen name={HOME} component={HomeNavigator} />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
