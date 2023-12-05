import React, { useEffect, useState } from 'react';
import handleTitle from '../../handle/handleTitle';
import NavbarDashboard from './components/NavbarDashboard';
import SidebarDashboard from './components/SidebarDashboard';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

function Dashboard() {
  handleTitle('Dashboard | GreenWaste');
  const { currentUser } = useSelector((state) => state.user);

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

  return (
    <div>
      <NavbarDashboard />
      <div className="flex flex-row h-screen">
        <SidebarDashboard />
        <div className="w-full ">
          <div className="m-5 bg-slate-50 rounded-lg shadow-lg">
            <div className="p-5">
              <h1 className="font-bold text-xl">
                Welcome To Dashboard {currentUser.username}
              </h1>
              <div className="mt-5">
                <img
                  src="/img/logo.png"
                  className="w-60 h-auto"
                  alt="logo-greenwaste"
                />
                <p className="text-sm mt-5">
                  GreenWaste sebagai pionir dalam menghadapi tantangan
                  meningkatnya volume limbah rumah tangga dan pabrik, kami
                  berkomitmen untuk menyediakan solusi inovatif dan edukatif
                  bagi individu, rumah tangga, dan bisnis. Kami memiliki
                  fitur-fitur unik yang mendukung komitmen ini, termasuk sebuah
                  forum interaktif tempat Anda dapat berdiskusi dan berbagi
                  pengalaman dengan komunitas yang peduli akan lingkungan.
                  Selain itu, kami juga menyediakan beragam solusi bermanfaat,
                  seperti tips praktis, video tutorial, dan berita terkini, yang
                  dapat membantu Anda memahami lebih baik bagaimana mengelola
                  limbah dan berkontribusi dalam pelestarian lingkungan. Visi
                  kami adalah mengatasi permasalahan lingkungan yang mendesak
                  dengan pendekatan yang berkelanjutan, dan kami berharap bahwa
                  sumber daya ini akan membantu Anda serta semua orang dalam
                  upaya bersama menciptakan dunia yang lebih hijau dan
                  berkelanjutan.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="m-5 bg-slate-50 rounded-lg shadow-lg w-full">
              <div className="p-5">
                <h1 className="font-bold text-xl">All Category</h1>
                <div className="mt-2">
                  <ul>
                    <li>Limbah Organik</li>
                    <li>Limbah Anorganik</li>
                    <li>Limbah B3</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="m-5 bg-slate-50 rounded-lg shadow-lg w-full">
              <div className="p-5">
                <h1 className="font-bold text-xl">All User</h1>
                <div className="mt-2">
                  <h1 className="text-lg">Total User {users.length}</h1>
                  <span className="text-green-600 hover:text-green-800">
                    <Link to="/dashboard/users">See List User</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
