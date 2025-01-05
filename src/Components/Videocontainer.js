import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/Constant";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getvideos();
  }, []);

  const getvideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
  

      {videos.map((videos) => (
        <Link key={videos.id} to={"/watch?v=" + videos.id}>
          {" "}
          <Videocard info={videos} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
