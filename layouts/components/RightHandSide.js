import React from "react";

import Suggestions from "./Suggestions";

const RightHandSide = ({ session }) => {
  return (
    <div className="hidden md:col-span-1 xl:inline-grid">
      <div
        className="absolute bg-white"
        style={{
          borderRadius: "10px",
        }}
      >
        <Suggestions />
      </div>
    </div>
  );
};
export default RightHandSide;
