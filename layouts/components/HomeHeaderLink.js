import React from "react";

const HomeHeaderLink = ({ Icon, text }) => {
  return (
    <div className="flex cursor-pointer flex-col items-center justify-center text-gray-700 hover:text-gray-700">
      <Icon
        style={{
          fontSize: "20px",
          color: "gray",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      />
      <h4 className={`text-sm text-gray-500`}>{text}</h4>
    </div>
  );
};

export default HomeHeaderLink;
