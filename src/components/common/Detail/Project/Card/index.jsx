import React from 'react';
import Avatar from '@Assets/image/icons/project-avatar.svg';
import More from '@Assets/image/icons/more.svg';

function Card() {
  return (
    <div className="bg-white shadow-md w-full py-4 cursor-pointer px-2 rounded-lg hover:-translate-y-2 transition duration-200 ease-in-out">
      <div className="flex items-center justify-between mr-12">
        <div className="flex gap-4 items-center">
          <img src={Avatar} className="cursor-pointer w-12 rounded-xl " alt="More-icon" />
          <div>
            <h1 className="font-body font-[500]">House Hold Risk Assesment Project</h1>
            <h1 className="font-body text-sm text-[#0055FF] font-[600]">Naxa Organisation</h1>
          </div>
        </div>
        <div className="flex flex-row items-center gap-24">
          <div className="flex flex-col">
            <h1 className="font-body font-bold">32</h1>
            <h1 className="font-body text-sm text-gray-500">Assesment</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-body font-bold">32</h1>
            <h1 className="font-body text-sm text-gray-500">Households</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="font-body font-bold">32</h1>
            <h1 className="font-body text-sm text-gray-500">Users</h1>
          </div>
          <div className="flex flex-col">
            <img src={More} className="cursor-pointer " alt="More-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
