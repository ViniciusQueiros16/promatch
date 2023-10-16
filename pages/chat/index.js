import React, { useState } from "react";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import ChatDisplay from "@layouts/components/chat/ChatDisplay";
import MatchesDisplay from "@layouts/components/chat/MatchesDisplay";

const ChatContainer = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleMatchSelect = (match) => {
    setSelectedMatch(match);
  };

  return (
    <ContractorsLayoutBase>
      <div className="container mx-auto rounded-lg">
        <div className="flex h-screen flex-row justify-between bg-white bg-clip-content dark:bg-darkmode-body">
          <MatchesDisplay handleUserClick={handleMatchSelect} />
          <ChatDisplay selectedMatch={selectedMatch} />
          <div className="w-2/5 border-l-2 px-5">
            <div className="flex flex-col">
              <div className="py-4 text-xl font-semibold">Group</div>
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="h-64 rounded-xl object-cover"
                alt=""
              />
              <div className="py-4 font-semibold">Created 22 Sep 2021</div>
              <div className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, perspiciatis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContractorsLayoutBase>
  );
};

export default ChatContainer;
