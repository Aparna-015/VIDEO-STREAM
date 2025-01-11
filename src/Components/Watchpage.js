import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { YOUTUBE_VIDEOS_BYID } from "./utils/Constant";
// import { HiUserCircle } from "react-icons/hi2";
import { IoMdContact } from 'react-icons/io';


const Watchpage = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState([]);
  const videoId = searchParams.get("v");
  const videoDetails = YOUTUBE_VIDEOS_BYID + videoId;

  const dispatch = useDispatch();

  useEffect(() => {
    const getVideoInfo = async () => {
      const response = await fetch(videoDetails);
      const json = await response.json();
      setVideoInfo(json.items || []);
    };
    getVideoInfo();
  }, [videoDetails]);

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row px-5 m-4">
        <div className="flex-row">
          <iframe
            width="900"
            height="550"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-1/3 ml-4">
          <LiveChat />
        </div>
      </div>

      {videoInfo.map((item) => (
        <div key={item.id} className="mt-2 ">
          <h1 className="font-bold text-xl flex-wrap text-left ml-8 my-3">
            {item?.snippet?.title}
          </h1>
          <div className="flex">
            <div className="flex  ml-20 my-4">
              <div  className='px-1 rounded-full w-10 h-10'>
                      
                <IoMdContact className='text-4xl mt-2'/>
                      </div>
              <ul className="flex  my-4">
                <li className="font-bold text-black ml-2">
                  <h1>
                    {item?.snippet?.channelTitle}
                    <br />
                    <span className="text-sm font-light text-black">
                      3.2k Subscribers
                    </span>
                  </h1>
                </li>

                <li>
                  <button className="py-1 mt-2 mx-3 w-22 bg-black h-8 hover:bg-gray-950 flex shadow-sm px-2 rounded-full text-white font-light">
                    Subscribe
                  </button>
                </li>
                <li>
                  <button className="flex bg-white mx-2 text-white shadow-sm px-2 py-1 rounded-full ml-6 hover:bg-gray-300">
                    
                  </button>
                  </li>  

                <li>
                  <button className="flex  bg-black px-2 py-1 text-white rounded-full ml-8 hover:bg-gray-300 ml-6">
                    👍 68K 👎
                  </button>
                </li>
                <li>
                  <button className="flex bg-black mx-2 text-white shadow-sm px-2 py-1 rounded-full ml-6 hover:bg-gray-300">
                    Share
                  </button>
                </li>
                <li>
                  <button className="bg-black px-2 py-1 text-white rounded-full ml-2 hover:bg-gray-300">
                    Download
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="ml-4 rounded-lg shadow-sm bg-gray-100 p-2 my-4 w-[900px]">
            <p className="font-bold text-left">
              5k Views{" "}
              <span className="mx-2">{item?.snippet?.publishedAt}</span>
            </p>
            <p className="font-normal text-left">
              {item?.snippet?.description}
            </p>
          </div>
        </div>
      ))}

      <CommentsContainer />
    </div>
  );
};

export default Watchpage;
