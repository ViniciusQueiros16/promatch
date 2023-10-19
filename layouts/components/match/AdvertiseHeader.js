import React from "react";
import { Icon } from "@mui/material";
import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5";
import UserHeader from "../UserHeader";

function AdvertiseHeader({ onCollapseToggle, isCollapsed }) {
  return (
    <div className="container-header">
      {!isCollapsed && <UserHeader />}

      <Icon
        as={isCollapsed ? IoArrowRedoSharp : IoArrowUndoSharp}
        cursor="pointer"
        className="m-4 text-green-500"
        onClick={onCollapseToggle}
      />
    </div>
  );
}

export default AdvertiseHeader;
