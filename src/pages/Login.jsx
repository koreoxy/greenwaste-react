import { useState } from 'react';
import handleTitle from '../handle/handleTitle';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../redux/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  handleTitle('Login | GreenWaste');
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //   e.preventDefault();
  //   try {
  //     dispatch(loginStart());
  //     const res = await fetch('/api/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await res.json();
  //     if (data.success === false) {
  //       dispatch(loginFailure(data.message));
  //       return;
  //     }
  //     dispatch(loginSuccess(data));

  //     // if login succesful and navigate to home page
  //     navigate('/');
  //   } catch (error) {
  //     dispatch(loginFailure(error.message));
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        // Handle non-successful response (HTTP status not in the range 200-299)
        const errorData = await res.json();
        dispatch(loginFailure(errorData.message || 'Login failed'));
        return;
      }

      const data = await res.json();
      dispatch(loginSuccess(data));

      // Navigate based on user role
      if (data.role === 'Admin') {
        navigate('/dashboard');
      } else {
        navigate('/');
      }
    } catch (error) {
      // Handle network or unexpected errors
      dispatch(loginFailure(error.message || 'Login failed'));
    }
  };

  return (
    <div className="h-screen md:flex md:gap-x-3.5">
      <img
        src="/img/login.jpg"
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
            Login to your account
          </h1>
          {/* FORM LOGIN */}
          <form
            className="w-fit flex flex-col gap-4 p-5"
            onSubmit={handleSubmit}
          >
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
            <p>
              <span className="font-bold">
                By signing up yout to agree to out
              </span>{' '}
              Terms & Condition and privacy Policy*
            </p>
            <button
              disabled={loading}
              className="p-3.5 text-white bg-green-button hover:bg-green-800 rounded-lg hover:opacity-95 disabled:opacity-80"
            >
              {loading ? 'Loading...' : 'Login'}
            </button>
          </form>
          <div className="flex gap-1 justify-center">
            <p className="my-auto">Don&apos;t have an account?</p>
            <a href="/register" className="my-auto text-green-dark">
              Register
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

export default Login;
