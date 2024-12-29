import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col">
      <div className="flex">
        <img
          src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/What%20is%20a%20Hamburger%20Button.png?width=225&name=What%20is%20a%20Hamburger%20Button.png "
          alt=""
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>

      <div>
        <input type="text" className="bg-red-300" />
        <button>Search</button>
      </div>

      <div>
        <img src="https://static-00.iconduck.com/assets.00/user-icon-470x512-joawnpv1.png" alt=""/>
        </div>
    </div>
  );
};

export default Header;
