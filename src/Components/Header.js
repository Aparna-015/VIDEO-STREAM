import React from "react";
import { toggleMenu } from "./utils/appSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="h-8 cursor-pointer"
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

      <div className="col-span-10 text-center">
        <input
          type="text"
          className="bg-red-300 w-1/2 p-2 border border-gray-400 rounded-l-full "
        />
        <button className="p-2 border border-gray-400 rounded-r-full">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-4"
          src="https://static-00.iconduck.com/assets.00/user-icon-470x512-joawnpv1.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
