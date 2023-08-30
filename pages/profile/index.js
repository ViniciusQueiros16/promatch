import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import EditProfile from "@layouts/components/EditProfile";
import ImageFallback from "@layouts/components/ImageFallback";
import RightHandSide from "@layouts/components/homeFeed/RightHandSide";
import { Avatar, Icon } from "@mui/material";
import { SessionContext } from "context/SessionContext";
import React, { useContext, useEffect, useState } from "react";
import { BsPencil } from "react-icons/bs";

function ShowProfile() {
  const session = useContext(SessionContext);

  const [speed, setSpeed] = useState();
  const [profileModal, setEditProfileModal] = useState(false);

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  const handleOpen = () => {
    setEditProfileModal(true);
  };

  const handleClose = () => {
    setEditProfileModal(false);
  };

  return (
    <div className="container mx-auto mt-8 flex ">
      <div className="relative mx-4 flex flex-col overflow-hidden rounded-lg border bg-theme-light text-center dark:bg-darkmode-body">
        <div className="relative">
          <ImageFallback
            className="h-50 w-full rounded-md"
            height="50"
            width="800"
            src="/images/background.jpg"
            alt="image background"
          />

          <div className="mt-auto flex items-center justify-center">
            <Avatar
              src={
                session.user?.avatar
                  ? session.user?.avatar
                  : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
              }
              className="absolute left-10 h-32 w-32"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end pr-4">
          <Icon
            onClick={handleOpen} // Use the handleOpen function to open the modal
            as={BsPencil}
            cursor="pointer"
            className="text-gray-500"
          />
        </div>

        <div className="ml-10 mt-12 text-left">
          <h4 className="cursor-pointer decoration-purple-700 underline-offset-1 hover:underline">
            {session.user?.username}
          </h4>
          <p className="text-sm text-dark dark:text-darkmode-light">
            {session.user?.email}
          </p>
          <div className="hidden text-left text-sm text-gray-500 md:inline">
            <div className=" font-medium">
              <div className="flex ">
                <span className="text-blue-500"> + 500 Connections</span>
              </div>
            </div>
          </div>
        </div>
        <EditProfile open={profileModal} onClose={handleClose} />

        <div className="mt-8 flex w-full items-center bg-white">dfzvcvzxv</div>
      </div>
      <div>
        <RightHandSide />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <ContractorsLayoutBase>
      <ShowProfile />
    </ContractorsLayoutBase>
  );
}

export default Profile;
