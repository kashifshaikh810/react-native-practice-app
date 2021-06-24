import {
  REGISER_FAIL,
  REGISER_LOADING,
  REGISER_SUCCESS,
  CLEAR_AUTH_STATE,
} from '../../../constants/ActionTypes';
import axiosInstance from '../../../helpers/axiosInterceptor';

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
  }) =>
  dispatch => {
    dispatch({
      type: REGISER_LOADING,
    });
    axiosInstance
      .post('auth/register', {
        email,
        password,
        username,
        first_name,
        last_name,
      })
      .then(res => {
        dispatch({
          type: REGISER_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: REGISER_FAIL,
          payload: err.response ? err.response.data : {error: 'Something went rong, please try again.'},
        });
      });
  };
