import React, { useEffect, useState } from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { FaBell, FaMicrophone } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';





const Header = () => {
  const [searchQuery, setSearchQuery] = useState();

   useEffect(() => {


   }, [searchQuery]);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 ">
      <div className="flex col-span-1  ">
        <img
          className="w-4 h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png "
          alt=""
        />

        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>

      <div className=" flex col-span-10 text-center justify-center items-center ">
        <input
          type="text"
          className=" w-1/2 p-2 border border-gray-400 rounded-l-full mb-2 " placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button className="p-3 border border-gray-400 rounded-r-full mb-2">
        <BsSearch />
        </button>
        <div  className=' ml-4 bg-gray-100 rounded-full w-11 h-10 hover:bg-slate-200'>
        <FaMicrophone className='text-2xl ml-2.5 m-1.5' />
          </div>

      </div>

      <div className='flex col-span-1 items-center'>
      <div  className=' rounded-full w-11 h-10 hover:bg-slate-100'>
        <FaBell className='text-2xl m-1.5'/>
        </div>
        <div  className=' px-1 rounded-full w-10 h-10'>
        <IoMdContact className='text-4xl -mt-0'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
