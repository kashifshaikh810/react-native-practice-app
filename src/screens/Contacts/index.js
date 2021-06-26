/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from '../../components/comman/Icon/index';
import ContactsComponent from '../../components/ContactsComponent/index';
import {GlobalContext} from '../../context/reducers/Provider';
import getContacts from '../../context/actions/contacts/getContacts';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading},
    },
  } = useContext(GlobalContext);

  // const data = [
  //   {first_name: 'asina'},
  //   {last_name: 'cris'},
  //   {first_name: 'ros'},
  //   {last_name: 'areana'},
  //   {first_name: 'jango'},
  //   {lastt_name: 'arris'},
  //   {first_name: 'text'},
  //   {last_name: 'marker'},
  //   {first_name: 'martin'},
  //   {last_name: 'dawd'},
  //   {first_name: 'anji'},
  //   {last_name: 'twist'},
  //   {first_name: 'draw'},
  //   {last_name: 'hadmi'},
  //   {first_name: 'marwadone'},
  //   {last_name: 'coster'},
  //   {first_name: 'dcosta'},
  //   {last_name: 'maroo'},
  //   {first_name: 'json'},
  //   {last_name: 'zegaro'},
  //   {dp_image: 'https://homepages.cae.wisc.edu/~ece533/images/serrano.png'},
  // ];

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, [loading]);

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" style={{padding: 10}} name="menu" size={25} />
        </TouchableOpacity>
      ),
      headerTitleAlign: 'center',
    });
  }, []);

  return (
    <ContactsComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      data={data}
      loading={loading}
    />
  );
};

export default Contacts;
