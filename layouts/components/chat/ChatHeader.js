import { Star, StarBorderOutlined } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { SessionContext } from "context/SessionContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

function ChatHeader() {
  const session = useContext(SessionContext);
  const [favorite, setFavorite] = useState(false);
  const [speed, setSpeed] = useState();

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  const toggleFavorite = () => {
    setFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <div className="flex items-center justify-between border-b-2 bg-white dark:bg-darkmode-body">
      <div className="flex items-center">
        <div className="img-container">
          <Avatar
            src={
              session?.user?.avatar
                ? session.user?.avatar
                : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
            }
          />
        </div>
        <div className="flex flex-col pt-4">
          <h4 className="text-lg text-gray-500">
            Web design to create one-pages
          </h4>
          <Link href="/profile">
            <p className="text-sm hover:underline">silsil</p>
          </Link>
        </div>
      </div>
      <div onClick={toggleFavorite}>
        {favorite ? (
          <Star className="text-yellow-300" />
        ) : (
          <StarBorderOutlined className="text-yellow-300" />
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
