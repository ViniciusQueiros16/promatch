import React, { useEffect } from "react";
import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import { Send } from "@mui/icons-material";

const ChatDisplay = ({ selectedMatch }) => {
  useEffect(() => {
    console.log('Selected match in ChatDisplay:', selectedMatch);
  }, [selectedMatch]);
  return (
    <div className="flex h-screen flex-col px-5">
      <ChatHeader />
      <div className="mt-4 flex flex-col">
        <div className="mb-4 flex justify-end">
          <div className="mr-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl bg-blue-400 px-4 py-3 text-white shadow-lg">
            Welcome to group everyone !
          </div>
          <img
            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
            className="h-8 w-8 rounded-full object-cover"
            alt=""
          />
        </div>
        <div className="mb-4 flex justify-start">
          <img
            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
            className="h-8 w-8 rounded-full object-cover"
            alt=""
          />
          <div className="ml-2 rounded-br-3xl rounded-tl-xl rounded-tr-3xl bg-gray-400 px-4 py-3 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
            praesentium, aut ullam delectus odio error sit rem. Architecto nulla
            doloribus laborum illo rem enim dolor odio saepe, consequatur quas?
          </div>
        </div>
        <div className="mb-4 flex justify-end">
          <div>
            <div className="mr-2 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl bg-blue-400 px-4 py-3 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
              repudiandae.
            </div>

            <div className="mr-2 mt-4 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl bg-blue-400 px-4 py-3 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              reiciendis!
            </div>
          </div>
          <img
            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
            className="h-8 w-8 rounded-full object-cover"
            alt=""
          />
        </div>
        <div className="mb-4 flex justify-start">
          <img
            src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
            className="h-8 w-8 rounded-full object-cover"
            alt=""
          />
          <div className="ml-2 rounded-br-3xl rounded-tl-xl rounded-tr-3xl bg-gray-400 px-4 py-3 text-white">
            happy holiday guys!
          </div>
        </div>
      </div>
      <div className="mt-auto mb-24  flex items-center">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full rounded-l-lg border px-3 py-2"
        />
        <button className="rounded-r-lg bg-blue-400  px-3 py-2.5">
          <Send className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ChatDisplay;
