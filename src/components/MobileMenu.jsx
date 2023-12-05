import React from 'react';
import { IoListCircle } from 'react-icons/io5';
import { RiAccountCircleFill, RiQuestionFill } from 'react-icons/ri';
import { SiQuantconnect } from 'react-icons/si';
import { GoHomeFill } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function MobileMenu() {
  const { currentUser } = useSelector((state) => state.user);

  const navigation = [
    {
      name: 'All',
      last: 'Question',
      href: '/forum/all-question',
      icon: (
        <IoListCircle
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: 'Ask',
      last: 'Question',
      href: '/forum/ask-question',
      icon: (
        <RiQuestionFill
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: '',
      href: '/',
      icon: (
        <GoHomeFill
          size={60}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: 'My',
      last: 'Question',
      href: '/forum/my-question',
      icon: (
        <RiAccountCircleFill
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: 'My',
      last: 'Profile',
      href: '/my-profile',
      icon: (
        <SiQuantconnect
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
  ];

  const navigationNotLogin = [
    {
      name: 'All',
      last: 'Question',
      href: '/forum/all-question',
      icon: (
        <IoListCircle
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: '',
      href: '/',
      icon: (
        <GoHomeFill
          size={60}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
    {
      name: 'Ask',
      last: 'Question',
      href: '/forum/ask-question',
      icon: (
        <RiQuestionFill
          size={30}
          className={({ iconActive }) => {
            return !iconActive;
          }}
        />
      ),
    },
  ];
  return (
    <div className="bg-green-500 text-white max-h-screen">
      <div>
        {currentUser ? (
          <div className="flex flex-row justify-between items-center p-3">
            {navigation.map((item) => (
              <NavLink
                to={item.href}
                key={item.name}
                className={({ isActive }) => {
                  return !isActive
                    ? 'flex flex-col items-center  text-white'
                    : 'flex flex-col items-center text-green-900';
                }}
              >
                {item.icon}
                <h1 className="text-[12px]">{item.name}</h1>
                <h1 className="text-[12px] mt-[-5px]">{item.last}</h1>
              </NavLink>
            ))}
          </div>
        ) : (
          <div className="flex flex-row justify-between items-center p-3">
            {navigationNotLogin.map((item) => (
              <NavLink
                to={item.href}
                key={item.name}
                className={({ isActive }) => {
                  return !isActive
                    ? 'flex flex-col items-center  text-white'
                    : 'flex flex-col items-center text-green-900';
                }}
              >
                {item.icon}
                <h1 className="text-[12px]">{item.name}</h1>
                <h1 className="text-[12px] mt-[-5px]">{item.last}</h1>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MobileMenu;
