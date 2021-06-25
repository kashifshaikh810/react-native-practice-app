import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Container from '../container/index';
import CustomButton from '../customButton/index';
import Message from '../Message/index';
import Input from '../input/index';
import styles from './style';
import {LOGIN} from '../../../constants/routeName';

const RegisterComponent = ({
  onSubmit,
  onChange,
  error,
  loading,
  form,
  errors,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

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
          {error?.error && (
            <Message
              retry
              danger
              retryFn={() => console.log(111, '222')}
              message={error?.error}
            />
          )}
          <Input
            label="Username"
            placeholder="Enter Username"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'userName', value: value});
            }}
            error={errors.userName || error?.username?.[0]}
          />

          <Input
            label="First Name"
            placeholder="Enter First Name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'firstName', value: value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />

          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'lastName', value: value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />

          <Input
            label="Email"
            placeholder="Enter Email"
            iconPosition="right"
            error={errors.email}
            onChangeText={value => {
              onChange({name: 'email', value: value});
            }}
            error={errors.email || error?.email?.[0]}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>{isSecureEntry ? 'Show' : 'hide'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value: value});
            }}
            error={errors.password || error?.password?.[0]}
          />
        </View>

        <CustomButton
          loading={loading}
          error={error}
          onPress={onSubmit}
          primary
          disabled={loading}
          title="Submit"
        />

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
