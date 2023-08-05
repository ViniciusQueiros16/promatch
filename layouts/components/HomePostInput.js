import React, { useContext, useEffect, useState } from "react";

import { BsYoutube } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";
import { MdAssignment, MdEventNote } from "react-icons/md";
// import CreatePost from "./CreatePost";
import { Avatar} from "@mui/material";
import { SessionContext } from "context/SessionContext";

const HomePostInput = () => {
  const user = useContext(SessionContext);
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
    <div className=" space-y-3 rounded-lg border border-gray-300 bg-theme-light p-3 dark:border-none dark:bg-darkmode-body">
      <div className="flex items-center space-x-2">
        <Avatar
          name={user?.username}
          src={
            user?.avatar
              ? user?.avatar
              : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
          }
          className="!h-10 !w-10 cursor-pointer"
        />

        <input
          type="text"
          class="peer block min-h-[auto] w-full rounded border border-gray-400 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlInput1"
          placeholder="Have a topic that excites you? Post about it"
          onClick={handleCreatePostOpen}
        />

        <>
          {/* {isCreatePostOpen && (
          <CreatePost onClose={handleCreatePostClose} speed={speed} />
        )} */}
        </>
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
