import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const ProviteRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation()
  console.log(location)

  if (loding) {
    return <>
      <span className="loading loading-spinner loading-lg"></span>
    </>;
  }
    if (user) {
      return children;
    }
  return <Navigate to={'/login'} state={location?.pathname}></Navigate>;
};

export default ProviteRoute;
