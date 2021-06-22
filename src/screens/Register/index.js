import React, {useState} from 'react';
import RegisterComponent from '../../components/comman/SignUp';
import envs from '../../config/env';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // const {BACKEND_URL} = envs;

  // console.log('backend_url', BACKEND_URL);
  // console.log('__DEV__', __DEV__);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {
              ...prev,
              [name]: 'This field needs min 6 characters.',
            };
          });
        } else {
          setErrors(prev => {
            return {
              ...prev,
              [name]: null,
            };
          });
        }
      } else {
        setErrors(prev => {
          return {
            ...prev,
            [name]: null,
          };
        });
      }
    } else {
      setErrors(prev => {
        return {
          ...prev,
          [name]: 'This field is required',
        };
      });
    }
  };

  const onSubmit = () => {
    console.log('form', form);

    if (!form.userName) {
      setErrors(prev => {
        return {
          ...prev,
          userName: 'Please add a username',
        };
      });
    }

    if (!form.firstName) {
      setErrors(prev => {
        return {
          ...prev,
          firstName: 'Please add a first name',
        };
      });
    }

    if (!form.lastName) {
      setErrors(prev => {
        return {
          ...prev,
          lastName: 'Please add a last name',
        };
      });
    }

    if (!form.email) {
      setErrors(prev => {
        return {
          ...prev,
          email: 'Please add a email',
        };
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {
          ...prev,
          password: 'Please add a password',
        };
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
