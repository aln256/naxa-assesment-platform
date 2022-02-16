import React from 'react';

import Form from '@Assets/image/icons/form-icon.svg';
import Project from '@Assets/image/icons/Project-icon.svg';
import User from '@Assets/image/icons/user-icon.svg';
import Setting from '@Assets/image/icons/settings-icon.svg';
import Notification from '@Assets/image/icons/Notifications-icon.svg';
import More from '@Assets/image/icons/more.svg';
import Left from '@Assets/image/icons/left.svg';
import Menu from '../Menu/index';

function Sidebar() {
  return (
    <div>
      <div className=" flex-col  items-center   px-4  py-2 grid grid-cols-1 divide-y-2">
        <div className="flex items-center justify-between py-2 basis-1/4">
          <h1 className="font-bold font-body cursor-pointer">
            <span className="font-black text-xl">naxa</span> <br /> Assesment Platform
          </h1>

          <img
            src={Left}
            className="cursor-pointer px-2 py-2 bg-blue-300 rounded-full hover:scale-105 transition mt-4 duraiton-200 ease-in "
            alt="More-icon"
          />
        </div>
        <div className="flex flex-col gap-52 ">
          <div>
            <Menu img={Project} title="Projects" alt="Project-icon" />
            <Menu img={Form} title="Forms" alt="Form-icon" />
            <Menu img={User} title="Users" alt="User-icon" />
            <Menu img={Setting} title="Settings" alt="Setting-icon" />
          </div>
          <div className="">
            <Menu img={Notification} title="Notifications" alt="Notification-icon" num={5} />
          </div>
        </div>
        <div className="flex  items-center justify-between py-2 px-2 my-4">
          <div className="flex items-center">
            <img
              className="object-cover w-12 h-12 mr-2 rounded-full cursor-pointer"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile "
            />
            <p className="font-semibold cursor-pointer font-body ">Anna Sharma</p>
          </div>
          <div className="mr-10">
            <img src={More} className="cursor-pointer " alt="More-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;