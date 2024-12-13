import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/icons8-job-portal-96.png';

const Navbar = () => {
  const { user, siginO } = useContext(AuthContext);
  const links = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Home</NavLink>
      <NavLink to={'/'}>My application</NavLink>
      <NavLink to={'/jobpost'}>Job Post</NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="w-9" src={logo} alt="" />
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex  ">
          <ul className="menu menu-horizontal flex gap-5  px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-4">
          {user ? (
            <>
              <button onClick={siginO} className="py-2 px-3 border">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link className="underlin" to={'/register'}>
                Register
              </Link>
              <Link className="py-2 px-3 border font-semibold" to={'/login'}>
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
