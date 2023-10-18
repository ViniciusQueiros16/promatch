import { Avatar } from "@mui/material";
import React from "react";

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

export default UserListItem;
