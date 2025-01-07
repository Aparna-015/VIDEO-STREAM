import React from "react";

const Chatmessage = ({ name,message }) => {
  return (
    
      <div className="flex item-center">
        <img
          className="w-8 h-8"
          src="https://www.shutterstock.com/image-vector/user-account-profile-circle-flat-600nw-467503004.jpg"
          alt=""
        />
     
      <span className="font-bold px-2"> {name}</span>
      <span> {message}</span>
      </div>
  );
};

export default Chatmessage;
