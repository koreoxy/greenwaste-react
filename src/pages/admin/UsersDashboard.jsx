import React, { useEffect, useState } from 'react';
import NavbarDashboard from './components/NavbarDashboard';
import SidebarDashboard from './components/SidebarDashboard';
import handleTitle from '../../handle/handleTitle';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function UsersDashboard() {
  handleTitle('Users Control | GreenWaste');

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = '/api/users';
    const token = Cookies.get('access_token');

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDeleteUser = async (userId) => {
    const token = Cookies.get('access_token');
    try {
      await fetch(`/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <NavbarDashboard />
      <div className="flex flex-row h-screen">
        <SidebarDashboard />
        <div className="w-full ">
          <div className="m-5 bg-slate-50 rounded-lg shadow-lg">
            <div className="p-5">
              <h1 className="font-bold text-xl">List All Users</h1>
              <Link to="/dashboard/users/add-new-user">
                <button className="btn btn-success text-white mt-2">
                  Add New User
                </button>
              </Link>
              {/* TABLE */}
              <div className="overflow-x-auto mt-5">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {users.map((item, i) => (
                      <tr key={i + 1}>
                        <th>{i + 1}</th>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                        <td className="">
                          <Link to={`/dashboard/users/edit-user/${item._id}`}>
                            <button className="btn btn-success btn-xs">
                              Edit
                            </button>
                          </Link>
                          <button
                            className="btn btn-error btn-xs ml-1"
                            onClick={() => handleDeleteUser(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersDashboard;
