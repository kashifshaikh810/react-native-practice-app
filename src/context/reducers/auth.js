import {
  CLEAR_AUTH_STATE,
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  REGISER_FAIL,
  REGISER_LOADING,
  REGISER_SUCCESS,
} from '../../constants/ActionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case LOGIN_LOADING:
    case REGISER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

      case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        isLoggedIn: true,
      };

    case REGISER_FAIL:
      case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    default:
      return state;
  }
};

export default auth;
