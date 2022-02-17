import React from 'react';
import Avatar from '@Assets/image/icons/project-avatar.svg';
import More from '@Assets/image/icons/more.svg';

function Card() {
  return (
    <div className="bg-white shadow-md lg:w-full md:w-2xl  lg:py-4  md:py-16 cursor-pointer  rounded-lg hover:-translate-y-2 transition duration-200 ease-in-out">
      <div className="flex md:flex-col  lg:flex-row lg:gap-4 md:gap-12 items-center justify-between lg:mr-12">
        <div className="flex lg:gap-4 md:gap-12 lg:px-2 md:px-10 items-center">
          <img src={Avatar} className="cursor-pointer lg:w-12 md:w-28 rounded-xl " alt="More-icon" />
          <div>
            <h1 className="font-body lg:text-base md:text-4xl font-[500]">House Hold Risk Assesment Project</h1>
            <h1 className="font-body lg:text-sm md:text-2xl text-[#0055FF] font-[600]">Naxa Organisation</h1>
          </div>
        </div>
        <div className="flex flex-row items-center gap-24">
          <div className="flex flex-col">
            <h1 className="font-body font-bold lg:text-base  md:text-2xl">32</h1>
            <h1 className="font-body lg:text-sm md:text-xl lg:text-sm text-gray-500">Assesment</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-body font-bold lg:text-base  md:text-2xl">32</h1>
            <h1 className="font-body text-sm text-gray-500 lg:text-sm md:text-xl">Households</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-body font-bold lg:text-base  md:text-2xl">32</h1>
            <h1 className="font-body text-sm text-gray-500 lg:text-sm md:text-xl">Users</h1>
          </div>
          <div className="flex flex-col md:text-2xl">
            <img src={More} className="cursor-pointer lg:w-6 md:w-16 " alt="More-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
