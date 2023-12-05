import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  logoutUserFailure,
  logoutUserStart,
  logoutUserSuccess,
} from '../../../redux/user/userSlice';

function NavbarDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      dispatch(logoutUserStart());
      const res = await fetch('/api/auth/logout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(logoutUserFailure(data.message));
        return;
      }
      dispatch(logoutUserSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(logoutUserFailure(data.message));
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-md mt-2 ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/dashboard/">
              <li>
                <p>Dashboard</p>
              </li>
            </NavLink>
            <NavLink to="/dashboard/users">
              <li>
                <p>User List</p>
              </li>
            </NavLink>
            <NavLink to="/dashboard/questions">
              <li>
                <p>Question List</p>
              </li>
            </NavLink>
            <div className="mt-2">
              <button
                className="btn btn-error btn-sm text-white w-full"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </ul>
        </div>
        <div className="normal-case text-xl navbar-center">
          <Link to="/">
            <img
              src="/img/logo.png"
              className="w-60 h-auto"
              alt="logo-greenwaste"
            />
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex lg:navbar-end">
        <button
          className="btn btn-error btn-sm text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavbarDashboard;
