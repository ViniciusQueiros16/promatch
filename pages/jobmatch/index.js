import React, { useContext, useEffect, useState } from "react";
import RightHandSide from "@layouts/components/homeFeed/RightHandSide";
import MatchesDisplay from "@layouts/components/MatchesDisplay";
import ChatDisplay from "@layouts/components/ChatDisplay";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import { Avatar } from "@mui/material";
import { SessionContext } from "context/SessionContext";

const MatchContainer = () => {
  const session = useContext(SessionContext);
  console.log(session);
  const [clickedUser, setClickedUser] = useState(false);
  const [speed, setSpeed] = useState();

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <ContractorsLayoutBase>
      <div className="flex flex-row justify-center gap-x-4">
        <div className="chat-container">
          {/* Header */}
          <div className="m-auto flex h-24 items-center justify-between rounded-t-2xl bg-gradient-to-tr from-yellow-700 to-yellow-200">
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
              <h4>{session?.user?.username}</h4>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4 flex flex-row justify-center">
            <button
              className="mx-auto text-sm"
              onClick={() => setClickedUser(true)}
            >
              Likes
            </button>
            <button
              className="mx-auto text-sm"
              onClick={() => setClickedUser(false)}
            >
              Likes Sent
            </button>
          </div>

          {!clickedUser && <MatchesDisplay setClickedUser={setClickedUser} />}

          {clickedUser && <ChatDisplay clickedUser={clickedUser} />}
        </div>
        <RightHandSide />
      </div>
    </ContractorsLayoutBase>
  );
};

export default MatchContainer;
