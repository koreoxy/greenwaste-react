import { useSelector } from 'react-redux';
import Sidebar from '../../../components/Sidebar';
import handleTitle from '../../../handle/handleTitle';
import { useState } from 'react';
import {
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  logoutUserStart,
  logoutUserFailure,
  logoutUserSuccess,
} from '../../../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import MobileMenu from '../../../components/MobileMenu';

function MyProfile() {
  handleTitle('My Profile | GreenWaste');
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/users/${currentUser._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());

      const res = await fetch(`/api/users/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

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
    <div className="flex flex-row justify-center ">
      <div className="hidden lg:inline">
        <Sidebar />
      </div>
      <div className="fixed bottom-0 left-0 right-0 lg:hidden">
        <MobileMenu />
      </div>

      <div className="max-w-xs sm:max-w-xl lg:max-w-2xl lg:flex-initial lg:w-[650px] mt-10">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between lg:ml-10 border-b-2 pb-4">
            <div className="text-xl pt-2 font-bold">
              <h1>My Profile</h1>
            </div>
          </div>

          <div className="lg:ml-10 p-5 bg-[#cff3bd] rounded-md mt-5">
            <div className="flex flex-row items-center mt-1">
              <img
                src="/img/avatar.png"
                alt="avatar icon"
                className="w-[50px] h-[50px]"
              />
              <h1 className="text-base font-bold ml-2">
                {currentUser.username}
              </h1>
            </div>

            <div className="mt-3">
              <form onSubmit={handleSubmit} className="flex flex-col">
                <h1 className="text-base font-semibold ml-1">Username</h1>
                <input
                  type="text"
                  placeholder="Username"
                  className="border p-3 rounded"
                  id="username"
                  defaultValue={currentUser.username}
                  onChange={handleChange}
                />
                <h1 className="text-base font-semibold mt-4 ml-1">Email</h1>
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-3 rounded"
                  id="email"
                  defaultValue={currentUser.email}
                  onChange={handleChange}
                />

                <h1 className="text-base font-semibold mt-4 ml-1">Password</h1>
                <input
                  type="password"
                  placeholder="Password"
                  className="border p-3 rounded"
                  id="password"
                  onChange={handleChange}
                />
                <button
                  disabled={loading}
                  className="bg-green-500 text-white rounded-lg p-4 uppercase hover:bg-green-700 disabled:opacity-80 mt-5"
                >
                  {loading ? 'Loading...' : 'Update Profile'}
                </button>
              </form>
              <div className="flex flex-row justify-between mt-2">
                <button
                  onClick={handleDeleteUser}
                  className="bg-red-500 text-white rounded-lg p-2 hover:bg-red-700"
                >
                  Delete Account
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white rounded-lg p-2 hover:bg-red-700"
                >
                  Logout
                </button>
              </div>

              <div>
                <p className="text-red-700 mt-3">{error ? error : ''}</p>
                <p className="text-green-700 mt-3">
                  {updateSuccess ? 'Updated Profile Successfully!' : ''}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION MY PARTICIPATION */}
        <div className="flex flex-col mt-10">
          <div className="flex flex-row justify-between lg:ml-10 border-b-2 pb-4">
            <div className="text-xl pt-2 font-bold">
              <h1>All Category</h1>
            </div>
          </div>

          <div className="lg:ml-10 p-5 bg-[#cff3bd] rounded-md mt-5">
            {/* ALL CATEGORY */}
            <div className="">
              <div className="flex flex-row gap-2 flex-wrap sm:flex-nowrap">
                <div className="bg-[#aaeb8a] p-5 rounded-md shadow-md text-center w-full sm:w-[200px]">
                  <h1 className="font-bold text-base">Limbah Anorganik</h1>
                  <span className="text-sm">5 Question</span>
                </div>
                <div className="bg-[#aaeb8a] p-5 rounded-md shadow-md text-center w-full sm:w-[200px]">
                  <h1 className="font-bold text-base">Limbah Organik</h1>
                  <span className="text-sm">10 Question</span>
                </div>
                <div className="bg-[#aaeb8a] p-5 rounded-md shadow-md text-center w-full sm:w-[200px]">
                  <h1 className="font-bold text-base">Limbah B3</h1>
                  <span className="text-sm">7 Question</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
