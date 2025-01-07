import React, { useEffect, useState } from "react";
import { addMessage } from "./utils/ChatSlice";
import { useDispatch, useSelector } from "react-redux";
import Chatmessage from "./Chatmessage";
import { generateRandomname } from "./utils/helper";
import { generateRandomMessages } from "./utils/helper";

const LiveChat = () => {
  const [Livemessage, setLivemessage] = useState("");

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    // API POLLING
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomname(),
          message: generateRandomMessages(15),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <>
      <div className="w-full  h-[500px]  ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <Chatmessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: " Aparna",
              message: Livemessage,
            })
          );
          setLivemessage("");
        }}
      >
        <input
          className="w-96"
          type="text"
          value={Livemessage}
          placeholder="send message......"
          onChange={(e) => {
            setLivemessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
