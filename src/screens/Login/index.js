import React, {useState} from 'react';
import {View, Text} from 'react-native';
import LoginComponent from '../../components/comman/Login/index';

const Login = () => {
  const [text, setText] = useState('');
  return (
      <LoginComponent />
  );
};

export default Login;
