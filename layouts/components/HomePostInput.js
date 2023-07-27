
import React, { useEffect, useState } from "react";

import { BsYoutube } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { MdAssignment, MdEventNote } from "react-icons/md";

// import CreatePost from "./CreatePost";
import { Avatar, Input } from "@mui/material";


const HomePostInput = ({ session }) => {
 
  const [speed, setSpeed] = useState();
 
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  const handleCreatePostOpen = () => {
    setIsCreatePostOpen(true);
  };

  const handleCreatePostClose = () => {
    setIsCreatePostOpen(false);
  };

  return (
    <div className="bg-white rounded-lg p-3 space-y-3 border border-gray-300 dark:border-none">
      <div className="flex items-center space-x-2">
        <Avatar
          name={session?.username}
          src={
            session?.avatar
              ? session?.avatar
              : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
          }
          className="!h-10 !w-10 cursor-pointer"
        />
        <Input
          placeholder="Have a topic that excites you? Post about it"
          style={{ borderRadius: "20px", cursor: "pointer" }}
          onClick={handleCreatePostOpen}
        />
        <>
        {/* {isCreatePostOpen && (
          <CreatePost onClose={handleCreatePostClose} speed={speed} />
        )} */}
        </>
      </div>
      <div className="flex items-center flex-wrap gap-4 justify-center md:gap-x-10">
        <button className="inputButton group">
          <IoMdPhotos className="text-blue-400 text-2xl" />
          <h4 className="opacity-80 group-hover:opacity-100">Photo</h4>
        </button>
        <button className="inputButton group">
          <BsYoutube className="text-green-400 text-2xl" />
          <h4 className="opacity-80 group-hover:opacity-100">Video</h4>
        </button>
        <button className="inputButton group">
          <MdEventNote className="text-yellow-600 text-2xl" />
          <h4 className="opacity-80 group-hover:opacity-100">Event</h4>
        </button>
        <button className="inputButton group">
          <MdAssignment className="text-red-400 text-2xl" />
          <h4 className="opacity-80 group-hover:opacity-100 whitespace-nowrap">
            Write Article
          </h4>
        </button>
      </div>
    </div>
  );
};
export default HomePostInput;