import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';


const SocialLogin = () => {
  const { signinWithGoogle } = useContext(AuthContext)
  
  const handeleLogin = () => {
    signinWithGoogle()
      .then(result => {
      console.log(result.user);
    })
  }

  return (
    <div className="m-4">
      <div className="divider lg:divider-horizontal">OR</div>
      <button onClick={handeleLogin}>Login with Google</button>
    </div>
  );
};

export default SocialLogin;