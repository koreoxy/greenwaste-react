import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import NavbarDashboard from './components/NavbarDashboard';
import SidebarDashboard from './components/SidebarDashboard';
import handleTitle from '../../handle/handleTitle';

function EditUser() {
  handleTitle('Edit User| GreenWaste');
  const params = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`/api/users/${params.userId}`);
        const userData = await res.json();
        setFormData({
          username: userData.username,
          email: userData.email,
          role: userData.role,
        });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, [params.userId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(`/api/admin/users/${params.userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      } else {
        navigate('/dashboard/users');
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
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
              <h1 className="font-bold text-xl">Edit User</h1>

              {/* FORM */}
              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-x-6 w-full max-w-full">
                  <div className="form-group flex flex-col md:w-1/2">
                    <h1 className="">Username</h1>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="input input-bordered input-accent w-full"
                    />
                  </div>

                  <div className="form-group flex flex-col md:w-1/2 mt-5 md:mt-0">
                    <h1 className="">Email</h1>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input input-bordered input-accent w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-x-6 w-full max-w-full mt-5">
                  <div className="form-group flex flex-col md:w-1/2">
                    <h1>Password</h1>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={handleChange}
                      className="input input-bordered input-accent w-full"
                    />
                  </div>

                  <div className="form-group flex flex-col md:w-1/2 mt-5 md:mt-0">
                    <h1>Role</h1>

                    <select
                      className="select select-accent w-full"
                      onChange={handleChange}
                      id="role"
                      value={formData.role}
                    >
                      <option value="" disabled>
                        Pilih Role untuk user
                      </option>
                      <option value="user">User</option>
                      <option value="Admin">Admin</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <button type="submit" className="btn btn-success text-white">
                    Update User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
