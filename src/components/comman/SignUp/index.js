import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../container/index';
import CustomButton from '../customButton/index';
import Input from '../input/index';
import styles from './style';
import {LOGIN} from '../../../constants/routeName';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require('../../../assists/Images/logo.png')}
      />

      <View>
        <Text style={styles.title}>Welcome To RNContacts</Text>
        <Text style={styles.SubTitle}>Create a free account</Text>

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter Username"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'userName', value: value});
            }}
            error={errors.userName}
          />

          <Input
            label="First Name"
            placeholder="Enter First Name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'firstName', value: value});
            }}
            error={errors.firstName}
          />

          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'lastName', value: value});
            }}
            error={errors.lastName}
          />

          <Input
            label="Email"
            placeholder="Enter Email"
            iconPosition="right"
            error={errors.email}
            onChangeText={value => {
              onChange({name: 'email', value: value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={true}
            icon={<Text>Show</Text>}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
            error={errors.password}
          />
        </View>
        <CustomButton onPress={onSubmit} primary title="Submit" />

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigate(LOGIN)}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
