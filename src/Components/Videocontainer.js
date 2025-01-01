import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/Constant";
import Videocard from "./Videocard";

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

      {videos.map(videos=><Videocard key={videos.id} info={videos} />)

}
    </div>
  );
};

export default Videocontainer;
