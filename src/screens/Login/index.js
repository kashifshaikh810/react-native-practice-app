import React, {useState, useContext} from 'react';
import LoginComponent from '../../components/comman/Login/index';
import { GlobalContext } from '../../context/reducers/Provider';
import LoginUser from '../../context/actions/auth/LoginUser';

const Login = () => {
  const [form, setForm] = useState({});

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      console.log('sas', 1111);
      LoginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
