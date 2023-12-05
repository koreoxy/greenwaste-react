import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  logoutUserFailure,
  logoutUserStart,
  logoutUserSuccess,
} from '../redux/user/userSlice';

function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    } catch (error) {
      dispatch(logoutUserFailure(data.message));
    }
  };
  return (
    <div className="navbar bg-base-100 shadow-md mt-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>

          {/* MOBILE MENU */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink to="/">
              <li>
                <p>Home</p>
              </li>
            </NavLink>

            <NavLink to="/solution">
              <li>
                <p>Solution</p>
              </li>
            </NavLink>
            <li>
              <NavLink to="/forum/all-question">
                <p>Forum</p>
              </NavLink>
              <ul className="p-2 min-w-max">
                <NavLink to="/forum/all-question">
                  <li>
                    <p>All Question</p>
                  </li>
                </NavLink>
                <NavLink to="/forum/ask-question">
                  <li>
                    <p>Ask Question</p>
                  </li>
                </NavLink>
                <NavLink to="/forum/my-question">
                  <li>
                    <p>My Question</p>
                  </li>
                </NavLink>
                <NavLink to="/my-profile">
                  <li>
                    <p>My Profile</p>
                  </li>
                </NavLink>
              </ul>
            </li>
            <div className="mt-1 py-3">
              {currentUser ? (
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <img
                      src="/img/avatar.png"
                      alt="avatar icon"
                      className="rounded-full w-11 object-cover"
                    />

                    <h1 className="font-semibold text-base">
                      {currentUser.username}
                    </h1>
                  </div>
                  {currentUser.role === 'Admin' && (
                    <li className="rounded-md p-2 text-green-700 font-semibold border border-green-700 hover:bg-green-700 hover:text-white cursor-pointer">
                      <Link to="/dashboard">
                        <p>Dashboard</p>
                      </Link>
                    </li>
                  )}
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white rounded-md text-center p-2 mt-2"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div>
                  <NavLink to="/register">
                    <p className="rounded-md p-2 text-green-700 font-semibold border border-green-700 hover:bg-green-700 hover:text-white cursor-pointer">
                      Register
                    </p>
                  </NavLink>

                  <NavLink to="/login">
                    <p className="bg-green-500 text-white rounded-md p-2 text-base font-semibold cursor-pointer hover:bg-green-700 hover:text-white mt-2 shadow-lg">
                      Login
                    </p>
                  </NavLink>
                </div>
              )}
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

      {/* DEKSTOP MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink to="/">
            <li className="font-bold text-base">
              <p>Home</p>
            </li>
          </NavLink>

          <NavLink to="/solution">
            <li className="font-bold text-base">
              <p>Solution</p>
            </li>
          </NavLink>
          <li tabIndex={0}>
            <details>
              <summary className="font-bold text-base">Forum</summary>
              <ul className="p-2 min-w-max ">
                <NavLink to="/forum/all-question">
                  <li>
                    <p>All Question</p>
                  </li>
                </NavLink>
                <NavLink to="/forum/ask-question">
                  <li>
                    <p>Ask Question</p>
                  </li>
                </NavLink>
                <NavLink to="/forum/my-question">
                  <li>
                    <p>My Question</p>
                  </li>
                </NavLink>
                <NavLink to="/my-profile">
                  <li>
                    <p>My Profile</p>
                  </li>
                </NavLink>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* BUTTON */}
      <div className="hidden lg:dropdown lg:dropdown-end lg:inline-flex lg:navbar-end">
        {currentUser ? (
          <div>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="avatar icon" src="/img/avatar.png" />
              </div>
            </div>

            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <div className="p-1 flex flex-row items-center border-b-2 mb-2">
                <img
                  alt="avatar icon"
                  src="/img/avatar.png"
                  className="w-[70px] rounded-full"
                />
                <h1 className="font-semibold text-md">
                  {currentUser.username}
                </h1>
              </div>
              <li>
                <Link to="/my-profile">
                  <p className="justify-between">My Profile</p>
                </Link>
              </li>
              {currentUser.role === 'Admin' && (
                <li>
                  <Link to="/dashboard">
                    <p>Dashboard</p>
                  </Link>
                </li>
              )}
              <li>
                <Link to="/forum/my-question">
                  <p>My Question</p>
                </Link>
              </li>

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white rounded-md text-center p-1 mt-2 hover:bg-red-900"
              >
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <div>
            <NavLink to="/register">
              <span className="mx-2 rounded-md p-2 text-base text-green-700 font-semibold border border-green-700 hover:bg-green-700 hover:text-white cursor-pointer">
                Register
              </span>
            </NavLink>
            <NavLink to="/login">
              <span className="bg-green-500 text-white rounded-md p-2 text-base font-semibold cursor-pointer hover:bg-green-700 hover:text-white">
                Login
              </span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
