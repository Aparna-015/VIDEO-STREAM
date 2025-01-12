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
      <div className="w-[400px]  h-[450px]  ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <Chatmessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
<div className="w-[400px] ">
      <form
        className="w-full flex p-2 ml-2 border border-black rounded-lg  "
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
  class="w-96 p-2 border border-gray-300 rounded-lg text-base focus:outline-none "
  type="text"
  value={Livemessage}
  placeholder="Send message..."
  onChange={(e) => setLivemessage(e.target.value)}
/>
<button class="py-1 bg-black text-white rounded-lg hover:bg-green-200 ">
  Send
</button>
      </form>
      </div>
    </>
  );
};

export default LiveChat;
