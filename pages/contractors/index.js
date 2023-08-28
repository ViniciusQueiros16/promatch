import React from "react";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import ProfileSide from "@layouts/components/homeFeed/ProfileSide";
import Feed from "@layouts/components/homeFeed/Feed";
import RightHandSide from "@layouts/components/homeFeed/RightHandSide";

const Contractors = () => {
  return (
    <ContractorsLayoutBase>
      <div className="mx-auto mt-8 max-h-screen overflow-hidden lg:max-w-6xl">
        <div className="grid grid-cols-9 gap-x-4">
          <ProfileSide />
          <Feed />
          <RightHandSide />
        </div>
      </div>
    </ContractorsLayoutBase>
  );
};

export default Contractors;
