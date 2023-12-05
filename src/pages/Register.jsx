import { useState } from 'react';
import handleTitle from '../handle/handleTitle';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  handleTitle('Register | GreenWaste');

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/api/auth/register', {
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
      navigate('/login');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="h-screen md:flex md:flex-row-reverse md:gap-x-3.5">
      <img
        src="/img/register.jpg"
        className="md:w-1/2 object-cover hidden md:block"
        alt="login"
      />
      <div className="md:w-1/2 py-4 flex flex-col justify-center items-center relative">
        <a href="/">
          <img
            src="/img/logo.png"
            className="absolute top-5 left-0"
            alt="logo"
          />
        </a>
        <div className="mt-20 lg:mt-5">
          <h1 className="text-center text-green-light text-4xl font-medium mt-5">
            Create an account
          </h1>

          {/* FORM REGISTER */}
          <form
            className="w-fit flex flex-col gap-4 p-5"
            onSubmit={handleSubmit}
          >
            <div className="form-group flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                name="username"
                id="username"
                className="px-3 py-2 border-gray-color border-2 rounded-md"
                placeholder="Your Username"
                onChange={handleChange}
              />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="px-3 py-2 border-gray-color border-2 rounded-md"
                placeholder="Your Email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="px-3 py-2 border-gray-color border-2 rounded-md"
                placeholder="Your Password"
                onChange={handleChange}
              />
            </div>
            <p className="text-sm">
              <span className="font-bold">
                By signing up yout to agree to out
              </span>{' '}
              Terms & Condition and privacy Policy*
            </p>
            <button
              disabled={loading}
              className="p-3.5 text-white bg-green-button hover:bg-green-800 rounded-lg hover:opacity-95 disabled:opacity-80"
            >
              {loading ? 'Loading...' : 'Register'}
            </button>
          </form>
          <div className="flex gap-1 justify-center text-sm">
            <p className="my-auto">Already signed up?</p>
            <a href="/login" className="my-auto text-green-dark">
              Login
            </a>
          </div>
          <div className="text-center text-sm text-green-600 hover:text-green-900">
            <Link to="/info-page">Account For Testing Features</Link>
          </div>
        </div>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}

export default Register;
