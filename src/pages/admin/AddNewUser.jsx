import React, { useState } from 'react';
import SidebarDashboard from './components/SidebarDashboard';
import NavbarDashboard from './components/NavbarDashboard';
import { useNavigate } from 'react-router-dom';
import handleTitle from '../../handle/handleTitle';

function AddNewUser() {
  handleTitle('Add New User | GreenWaste');

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user', // Set the default role here
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'role') {
      setFormData({
        ...formData,
        [id]: value,
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/dashboard/users');
    } catch (error) {
      setLoading(false);
      setError(error.message);
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
              <h1 className="font-bold text-xl">Add New User</h1>

              {/* FORM */}
              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row gap-x-6 w-full max-w-ful">
                  <div className="form-group flex flex-col md:w-1/2">
                    <h1 className="">Username</h1>
                    <input
                      type="text"
                      placeholder="Username"
                      id="username"
                      required
                      className="input input-bordered input-accent w-full"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group flex flex-col md:w-1/2 mt-5 md:mt-0">
                    <h1 className="">Email</h1>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      required
                      className="input input-bordered input-accent w-full"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-x-6 w-full max-w-ful mt-5">
                  <div className="form-group flex flex-col md:w-1/2">
                    <h1>Password</h1>
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      required
                      className="input input-bordered input-accent w-full"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group flex flex-col md:w-1/2 mt-5 md:mt-0">
                    <h1>Role</h1>

                    <select
                      className="select select-accent w-full"
                      required
                      onChange={handleChange}
                      defaultValue="user"
                      id="role"
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
                  <button className="btn btn-success text-white">
                    Add User
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

export default AddNewUser;
