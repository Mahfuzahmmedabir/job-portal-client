import React, { useContext } from 'react';
import LoginLotty from '../../assets/Login.json';
import AuthContext from '../../context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
  const { loginWithEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate()
  console.log('Login page', location);
  const forms = location?.state || '/'
  const handealLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmail(email, password)
      .then(result => {
        alert('user sussefull');
        console.log(result.user);
        navigate(forms);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="hero  min-h-screen bg-slate-700">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={LoginLotty}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handealLogin} className="card-body">
              <h2 className="text-3xl font-bold">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
