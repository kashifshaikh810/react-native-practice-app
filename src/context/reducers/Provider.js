import React, {createContext, useReducer} from 'react';
import authInitialState from '../initialStates/authStates';
import contactsInitialStates from '../initialStates/contactsInitialStates';
import auth from './auth';
import contacts from './contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactsInitialStates,
  );
  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
