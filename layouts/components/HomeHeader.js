import React from "react";

import { RiAccountCircleFill } from "react-icons/ri";
import {
  AiFillHome,
  AiOutlineUnorderedList,
  AiFillMessage,
} from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";

import HomeHeaderLink from "./HomeHeaderLink";
import { Input } from "@mui/material";
import ImageFallback from "./ImageFallback";

const HomeHeader = () => {
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm ">
      <header className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        <div className="m-auto flex justify-center">
          <ImageFallback
            src="/images/promatch-logo.png"
            className="p-3"
            width={85} height={80}
          />

          <Input
            className="m-2"
            placeholder="Search"
            height="35px"
            borderRadius="10px"
          />
        </div>
        <div className="flex items-center divide-gray-300 sm:divide-x">
          <div className="hidden space-x-8 pr-4 sm:flex">
            <HomeHeaderLink Icon={AiFillHome} text="Home" />
            <HomeHeaderLink Icon={BsFillPeopleFill} text="Network" />
            <HomeHeaderLink Icon={MdWork} text="Jobs" />
            <HomeHeaderLink Icon={AiFillMessage} text="Messaging" />
            <div className="relative">
              <HomeHeaderLink Icon={IoMdNotifications} text="Notification" />
              <div className="absolute -top-2 right-3 flex h-5 w-5 animate-ping items-center justify-center rounded-full bg-red-500 text-xs text-white">
                3
              </div>
            </div>
            <HomeHeaderLink Icon={RiAccountCircleFill} text="Me" />
            <span className="hidden h-0.5 w-[calc(100%+20px)] rounded-t-full bg-black dark:bg-white lg:inline-flex" />
            <HomeHeaderLink Icon={AiOutlineUnorderedList} text="Work" />
          </div>
        </div>
      </header>
    </div>
  );
};
export default HomeHeader;
