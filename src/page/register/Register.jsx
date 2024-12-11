import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const Register = () => {
  const { creatUserEmailP } = useContext(AuthContext);
  const handealSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regex.test(password)) {
      return alert('no');
    }


    creatUserEmailP(email, password)
      .then(result => {
        alert('user register');
        console.log(result.user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <DotLottieReact
              className="lg:w-[500px]"
              src="https://lottie.host/5e578203-68a9-48b7-8bf6-e19d7d8ac14b/8kBnzo7Dh3.lottie"
              loop
              autoplay
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handealSubmit} className="card-body">
              <h2 className="text-3xl font-bold">Register</h2>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
