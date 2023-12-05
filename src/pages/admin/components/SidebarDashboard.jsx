import React from 'react';
import { MdOutlineDashboard, MdOutlineQuestionAnswer } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

function SidebarDashboard() {
  const navigation = [
    {
      name: 'Dashboard',
      href: '/dashboard/',
      icon: (
        <MdOutlineDashboard
          size={20}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: 'Users',
      href: '/dashboard/users',
      icon: (
        <FaUsers
          size={20}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: 'Question',
      href: '/dashboard/questions',
      icon: (
        <MdOutlineQuestionAnswer
          size={20}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
  ];
  return (
    <div className="hidden lg:block menu menu-lg shadow-md max-w-xs w-full">
      {navigation.map((item, i) => (
        <div key={i} className="mt-5">
          <NavLink
            to={item.href}
            className={({ isActive }) => {
              return !isActive
                ? 'text-gray-600 flex flex-row items-center gap-2 p-3 font-normal text-base hover:bg-[#cff3bd] hover:rounded-e-xl'
                : 'text-[#1a643d] bg-[#cff3bd] rounded-e-xl flex flex-row items-center gap-2 p-3 font-semibold text-base border-2 border-green-800';
            }}
          >
            {item.icon}
            {item.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default SidebarDashboard;
