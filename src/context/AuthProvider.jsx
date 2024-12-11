import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext/AuthContext';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import auth from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLogin] = useState(true);

  const creatUserEmailP = (email, password) => {
    setLogin(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmail = (email, password) => {
    setLogin(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const siginO = () => {
    setLogin(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, cre => {
      setLogin(false);
      console.log(cre);
      setUser(cre);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loding,
    creatUserEmailP,
    loginWithEmail,
    siginO,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
