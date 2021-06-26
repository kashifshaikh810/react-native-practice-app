import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import AppModal from '../comman/modal';
import CustomButton from '../../components/comman/customButton/index';
import Message from '../comman/Message/index';
import colors from '../../assists/theme/colors';
import Icon from '../comman/Icon/index';
import styles from './styles';

const ContactsComponent = ({modalVisible, data, loading, setModalVisible}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No contacts to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {dp_image, first_name, last_name, phone_number} = item;

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {dp_image ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: dp_image}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
              }}></View>
          )}

        <View style={{flexDirection: 'row'}}>
          <Text>{first_name}</Text>
          <Text>{last_name}</Text>
        </View>

        <Text>{phone_number}</Text>
        </View>

        <Icon name="right" type="ant" />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <AppModal
        modalFooter={<></>}
        modalBody={
          <View>
            <Text>Hello</Text>
          </View>
        }
        title="My Profile!"
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      {!loading && (
        <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      {loading && (
        <View style={[{paddingVertical: 20}]}>
          <FlatList
            renderItem={renderItem}
            data={data}
            keyExtractor={item => String(item.id)}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height: 150}}></View>}
          />
        </View>
      )}

      {/* <CustomButton
        title="Open Modal"
        primary
        onPress={() => {
          setModalVisible(true);
        }}
      /> */}
    </View>
  );
};

export default ContactsComponent;
