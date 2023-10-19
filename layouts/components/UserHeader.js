import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { SessionContext } from "context/SessionContext";

const UserHeader = () => {
  const session = useContext(SessionContext);
  const [speed, setSpeed] = useState();

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="profile">
      <div className="img-container">
        <Avatar
          src={
            session?.user?.avatar
              ? session.user?.avatar
              : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
          }
        />
      </div>
      <h4>{session.user?.username}</h4>
    </div>
  );
};

export default UserHeader;
