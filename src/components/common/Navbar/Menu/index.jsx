import React from 'react';
import PropTypes from 'prop-types';

function Menu({ img, title, alt, num }) {
  return (
    <div className="flex items-center justify-between  gap-4 my-4 mr-12 ">
      <div className="flex flex-grow  items-center gap-2 py-1 px-2 text-sm  rounded-md font-bold text-[#0055FF] cursor-pointer hover:bg-blue-400">
        <img src={img} className=" " alt={alt} />
        <h2 className="font-body font-semibold">{title}</h2>
      </div>
      {num && (
        <div>
          <p className="px-3 text-white cursor-pointer font-body py-1 bg-red-400 rounded-full hover:scale-105 transition duration-200 ease-in">
            {num}
          </p>
        </div>
      )}
    </div>
  );
}

Menu.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
};

export default Menu;
