import React, { useContext, useEffect, useState } from "react";

import { BsYoutube } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { MdAssignment, MdEventNote } from "react-icons/md";
import { Avatar } from "@mui/material";
import { SessionContext } from "context/SessionContext";
import CreatePost from "./CreatePost";

const HomePostInput = () => {
  const session = useContext(SessionContext);
  const [speed, setSpeed] = useState();
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  const handleOpenCreatePost = () => {
    setIsCreatePostOpen(true);
  };

  const handleCloseCreatePost = () => {
    setIsCreatePostOpen(false);
  };

  return (
    <div className=" space-y-3 rounded-lg border border-gray-300 bg-theme-light p-3 dark:border-none dark:bg-darkmode-body">
      <div className="flex items-center space-x-2">
        <Avatar
          name={session.user?.username}
          src={
            session.user?.avatar
              ? session.user?.avatar
              : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
          }
          className="!h-10 !w-10 cursor-pointer"
        />

        <input
          type="text"
          className="bordermt-2 block w-full rounded-lg  border-blue-700 bg-white px-4 py-2 text-gray-700 focus:border-green-700 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40"
          id="exampleFormControlInput1"
          placeholder="Have a topic that excites you? Post about it"
          onClick={handleOpenCreatePost}
        />

        {isCreatePostOpen && (
          <CreatePost
            open={isCreatePostOpen}
            onClose={handleCloseCreatePost}
            speed={speed}
          />
        )}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-x-10">
        <button className="inputButton group">
          <IoMdPhotos className="text-2xl text-blue-400" />
          <h5 className="opacity-80 group-hover:opacity-100">Photo</h5>
        </button>
        <button className="inputButton group">
          <BsYoutube className="text-2xl text-green-400" />
          <h5 className="opacity-80 group-hover:opacity-100">Video</h5>
        </button>
        <button className="inputButton group">
          <MdEventNote className="text-2xl text-yellow-600" />
          <h5 className="opacity-80 group-hover:opacity-100">Event</h5>
        </button>
        <button className="inputButton group">
          <MdAssignment className="text-2xl text-red-400" />
          <h5 className="whitespace-nowrap opacity-80 group-hover:opacity-100">
            Write Article
          </h5>
        </button>
      </div>
    </div>
  );
};
export default HomePostInput;
