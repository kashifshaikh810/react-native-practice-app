import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../../comman/container/index';
import CustomButton from '../../comman/customButton/index';
import Input from '../../comman/input/index';
import styles from './style';
import {REGISTER} from '../../../constants/routeName';
import Message from '../Message';

const LoginComponent = ({error, onChange, onSubmit, loading}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        style={styles.logoImage}
        source={require('../../../assists/Images/myLogo.png')}
      />

      <View>
        <Text style={styles.title}>Welcome To RNContacts</Text>
        <Text style={styles.SubTitle}>Please Login here</Text>

        <View style={styles.form}>
          {error && !error?.error && (
            <Message
              onDismiss={() => {}}
              message="invalid credentials"
              danger
            />
          )}
          {error?.error && <Message danger onDismiss message={error?.error} />}
          <Input
            label="Username"
            placeholder="Enter Username"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'userName', value: value});
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
          />
        </View>
        <CustomButton
          onPress={onSubmit}
          loading={loading}
          disabled={loading}
          primary
          title="Submit"
        />

        <View style={styles.createSection}>
          <Text style={styles.infoText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigate(REGISTER)}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
