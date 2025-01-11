import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdVideoSettings } from "react-icons/md";
import { RiLiveFill } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";
import { MdSportsGolf } from "react-icons/md";
import { SiEslgaming } from "react-icons/si";
import { MdOutlineLocalMovies } from "react-icons/md";
import { GiFilmSpool } from "react-icons/gi";
import { MdOutlineSportsHandball } from "react-icons/md";
import { GiLoveSong } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa";




const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48 m-2">
      <ul >
     
      <li className="my-4 flex items-center ">
      <Link to="/"className="flex items-center gap-2" >
        <IoMdHome className="text-2xl" /> 
        <span>Home</span> 
      </Link>
    </li>
      <li className='my-4 flex items-center gap-2' ><SiYoutubeshorts /> <span>shorts</span> </li>
      <li className='my-4 flex items-center gap-2'><MdVideoSettings /><span>Videos</span> </li>
      <li className='my-4 flex items-center gap-2' ><RiLiveFill />
      <span>Live</span></li>
      </ul>
      <h1 className="font-bold pt-5"> Subscriptions </h1>
      <ul >
      <li className='my-4 flex items-center gap-2' > <MdLibraryMusic />
      <span>Music </span> </li>
      <li className='my-4 flex items-center gap-2' > <MdSportsGolf />
      <span>Sports</span> </li>
      <li className='my-4 flex items-center gap-2' > <SiEslgaming />
      <span> Gaming</span> </li>
      <li className='my-4 flex items-center gap-2' ><MdOutlineLocalMovies />

 <span>Movies</span></li>
      </ul>
      <h1 className="font-bold pt-5 "> Watch later </h1>
      <ul>
      
      <li className='my-4 flex items-center gap-2' ><MdOutlineSportsHandball />
      <span> sports </span></li>
      <li className='my-4 flex items-center gap-2' > <GiFilmSpool />
      <span>Films</span> </li>
      <li className='my-4 flex items-center gap-2' ><GiLoveSong />
      <span>Songs</span> </li>
      <li className='my-4 flex items-center gap-2' > <FaNewspaper />
      <span> News</span></li>
      </ul>
    </div>                                                       
  );
};

export default Sidebar;
