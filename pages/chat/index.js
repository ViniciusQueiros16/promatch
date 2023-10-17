import React, { useState } from "react";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import ChatDisplay from "@layouts/components/chat/ChatDisplay";
import MatchesDisplay from "@layouts/components/chat/MatchesDisplay";
import RatingDisplay from "@layouts/components/chat/RatingDisplay";

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
          <RatingDisplay/>
        </div>
      </div>
    </ContractorsLayoutBase>
  );
};

export default ChatContainer;
