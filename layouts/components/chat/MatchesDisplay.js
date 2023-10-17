import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

const users = [
  {
    imgSrc: "https://source.unsplash.com/_7LbC5J-jw4/600x600",
    name: "Luis1994",
    message: "Pick me at 9:00 AM",
  },
  {
    imgSrc: "https://source.unsplash.com/otT2199XwI8/600x600",
    name: "Everest Trip 2021",
    message: "Hi Sam, Welcome",
  },
  {
    imgSrc: "https://source.unsplash.com/L2cxSuKWbpo/600x600",
    name: "MERN Stack",
    message: "Lusi : Thanks Everyone",
  },
  {
    imgSrc: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
    name: "Javascript Indonesia",
    message: "Evan : some one can fix this",
  },
  {
    imgSrc: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
    name: "Another User",
    message: "Hello, this is another message",
  },
  {
    imgSrc: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
    name: "Random User",
    message: "Hey there, how are you?",
  },
];

const MatchesDisplay = ({ handleUserClick, selectedMatch }) => {
  return (
    <div className="my-4 flex w-2/5 flex-col overflow-y-auto border-r-2">
      <div className="flex items-center justify-center text-xl font-semibold">
        Matches
      </div>
      <div className="border-b-2 px-2 pb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search match"
            className="w-full rounded-2xl border-2 border-gray-200 px-2 py-2 pr-10"
          />
          <IconButton
            style={{ position: "absolute", right: "8px", top: "6px" }}
            aria-label="Search"
          >
            <Search />
          </IconButton>
        </div>
      </div>
      {users.map((match, index) => (
        <div
          key={index}
          className={`${
            selectedMatch === match ? "border border-blue-400" : "border-none"
          }`}
          onClick={() => handleUserClick(match)}
        >
          <UserListItem
            imgSrc={match.imgSrc}
            name={match.name}
            message={match.message}
          />
        </div>
      ))}
    </div>
  );
};

const UserListItem = ({ imgSrc, name, message }) => {
  return (
    <div className="flex flex-row items-center border-b-2 px-2 py-4">
      <div className="w-1/4">
        <Avatar
          src={imgSrc}
          className="h-12 w-12 rounded-full object-cover"
          alt="matched user section"
        />
      </div>
      <div className="ml-2 w-full">
        <div className="text-lg font-semibold">{name}</div>
        <span className="text-gray-500">{message}</span>
      </div>
    </div>
  );
};

export default MatchesDisplay;
