import AsyncStorage from '@react-native-community/async-storage';
import {LOGOUT_USER} from '../../../constants/ActionTypes';

export default () => dispatch => {
  AsyncStorage.removeItem('token');
  AsyncStorage.removeItem('user');
  dispatch({
    type: LOGOUT_USER,
  });
};
