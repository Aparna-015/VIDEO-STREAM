import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 m-2">
      <ul >
      <li className='my-4' > <Link to= "/"> Home</Link> </li>
      <li className='my-4' >shorts </li>
      <li className=' my-4' >Videos </li>
      <li className='my-4' > Live</li>
      </ul>
      <h1 className="font-bold pt-5"> Subscriptions </h1>
      <ul >
      <li className='my-4' >Music </li>
      <li className='my-4' >sports </li>
      <li className='my-4' >gaming </li>
      <li className='my-4' > movies</li>
      </ul>
      <h1 className="font-bold pt-5 "> Watch later </h1>
      <ul>
      <li className='my-4' >Music </li>
      <li className='my-4' >sports </li>
        <li className='my-4' >gaming </li>
        <li className='my-4' > movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
