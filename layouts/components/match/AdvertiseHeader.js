import React, { useContext, useEffect, useState } from "react";
import { Avatar, Icon } from "@mui/material";
import { SessionContext } from "context/SessionContext";
import { IoArrowRedoSharp, IoArrowUndoSharp } from "react-icons/io5";

function AdvertiseHeader({ onCollapseToggle, isCollapsed }) {
  const session = useContext(SessionContext);
  const [speed, setSpeed] = useState();

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="container-header">
      <div className="profile">
        <div className="img-container">
          <Avatar
            src={
              session.user?.avatar
                ? session.user?.avatar
                : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
            }
          />
        </div>
        <h4>{session.user?.username}</h4>
      </div>

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
