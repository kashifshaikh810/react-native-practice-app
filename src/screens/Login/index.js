import React, {useState, useContext, useEffect} from 'react';
import LoginComponent from '../../components/comman/Login/index';
import {GlobalContext} from '../../context/reducers/Provider';
import LoginUser from '../../context/actions/auth/LoginUser';
import {useRoute} from '@react-navigation/native';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      LoginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      justSignedUp={justSignedUp}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
