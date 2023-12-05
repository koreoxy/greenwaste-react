import { useSelector } from 'react-redux';
import { Link, Navigate, Outlet } from 'react-router-dom';

function IsAdmin() {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser.role === 'Admin' ? (
    <Outlet />
  ) : (
    <div className="max-w-2xl mx-auto text-center mt-20">
      <h1>Your not Admin</h1>
      <button className="bg-green-500 hover:bg-green-800 p-2 mt-2 text-white">
        <Link to="/">Go back Home</Link>
      </button>
    </div>
  );
}

export default IsAdmin;
