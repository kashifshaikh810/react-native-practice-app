import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HOME} from '../constants/routeName';
import HomeNavigator from '../navigations/HomeNavigator';
import SideMenu from './SideMenu';
import {GlobalContext} from '../context/reducers/Provider';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const DrawerNav = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);
  return (
    <DrawerNav.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <DrawerNav.Screen name={HOME} component={HomeNavigator} />
    </DrawerNav.Navigator>
  );
};

export default DrawerNavigator;
