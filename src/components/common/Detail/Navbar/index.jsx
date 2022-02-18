import React from 'react';
import Grid from '@Assets/image/icons/grid.svg';
import Down from '@Assets/image/icons/down.svg';
import List from '@Assets/image/icons/list.svg';
import Add from '@Assets/image/icons/add.svg';

function Navbar() {
  return (
    <div className="flex md:flex-col  lg:flex-row items-center justify-between lg:px-6 lg:mt-2 lg:my-6">
      <div>
        <h1 className="lg:text-2xl lg:mt-2  md:text-4xl md:mt-12 font-black font-body">Projects</h1>
      </div>
      <div className="md:mt-6">
        <h1 className="text-xl font-bold text-gray-600 ">
          <div className="flex  items-center md:gap-2 md:ml-6  lg:gap-2">
            <p className="text-3xl">
              5 <span className="text-sm text-gray-500 font-body">projects</span>
            </p>
            <img
              src={Grid}
              className="cursor-pointer text-gray-400 px-2 py-2 hover:bg-[#E9EBFF] rounded-lg "
              alt="More-icon"
            />
            <img
              src={List}
              className="cursor-pointer text-gray-400 px-2 py-2 hover:bg-[#E9EBFF] rounded-lg "
              alt="More-icon"
            />
            <div className="flex items-center border-gray-200 border-2 bg-white rounded-md ">
              <p className="md:text-[10px] lg:text-[14px] cursor-pointer font-body font-bold pl-4">Last Updated</p>
              <img src={Down} className="cursor-pointer w-10  px-2 py-2  " alt="More-icon" />
            </div>
            <div />
            <div className=" relative mx-auto text-gray-600">
              <button type="submit" className="absolute pl-2 top-0 mt-3 mr-4">
                <svg
                  className="text-gray-600 h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 56.966 56.966"
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
              <input
                className="border-2 border-gray-300 font-body bg-white h-10 px-8 pr-8 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center bg-blue-700 rounded-lg cursor-pointer lg:pr-4 lg:py-0  md:pr-4 py-[1px] hover:scale-105 transition  duration-400 ease-in">
              <img
                src={Add}
                className="cursor-pointer md:w-12 lg:w-12  md:ml-2 lg:ml-4 md:px-2 md:py-2  "
                alt="More-icon"
              />
              <h1 className=" md:hidden lg:inline-flex  lg:text-sm   font-semibold font-body text-white">
                Add Projects
              </h1>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
