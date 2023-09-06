import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import ImageFallback from "../ImageFallback";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { SessionContext } from "context/SessionContext";
import EditProfile from "../EditProfile";

const ProfileSide = () => {
  const session = useContext(SessionContext);
  const [speed, setSpeed] = useState();
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  const handleAvatarClick = () => {
    setIsEditProfileOpen(true);
  };

  return (
    <div className="hidden md:col-span-2 xl:inline-grid">
      <div className="item-center col-span-2 flex flex-col px-2 md:items-start">
        {/* Top */}
        <div className="hidden:md relative flex flex-col items-center overflow-hidden rounded-lg border bg-theme-light text-center dark:bg-darkmode-body">
          <div className="relative ">
            <ImageFallback
              className="h-full w-full"
              height="100"
              width="200"
              src="/images/background.jpg"
              alt="image background"
            />
          </div>
          <Avatar
            name={session.user?.username}
            onClick={handleAvatarClick}
            src={
              session.user?.avatar
                ? session.user?.avatar
                : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
            }
            className="!absolute !top-9 !h-14 !w-14 !cursor-pointer !border-2"
          />
          <EditProfile
            open={isEditProfileOpen}
            onClose={() => setIsEditProfileOpen(false)}
            isDisabled={true}
          />
          <div className="mt-5 space-x-0.5 py-4">
            <h4 className="cursor-pointer decoration-purple-700 underline-offset-1 hover:underline">
              {session.user?.username}
            </h4>
            <p className="text-sm text-dark dark:text-darkmode-light">
              {session.user?.email}
            </p>
          </div>
          <div className="hidden text-left text-sm text-gray-500 md:inline">
            <div className="sidebarButton space-y-0.5 font-medium">
              <div className="flex justify-between space-x-2">
                <h6>Connection</h6>
                <span className="text-blue-500">321</span>
              </div>
              <div className="flex justify-between space-x-2">
                <h6>Views of your post</h6>
                <span className="text-blue-500">1,892</span>
              </div>
            </div>

            <div className="sidebarButton">
              <h4 className="text-xs leading-4">
                Access exclusive tools & insights
              </h4>
              <h6 className="font-light text-dark dark:text-darkmode-light">
                <span className="mr-1 inline-block h-3 w-3 rounded-sm bg-gradient-to-tr from-yellow-700 to-yellow-200" />
                Try Premium for free
              </h6>
            </div>

            <div className="sidebarButton flex items-center space-x-1.5">
              <BsFillBookmarkStarFill className="!-ml-1" />
              <h6 className="font-medium text-dark dark:text-darkmode-light">
                My items
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileSide;
