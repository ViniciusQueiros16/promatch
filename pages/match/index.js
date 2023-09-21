import React from "react";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import SwipeCards from "@layouts/components/match/SwipeCards";
import Advertise from "@layouts/components/match/Advertise";

const db = [
  {
    name: "Richard Hendricks",
    url: "/images/author.png",
  },
  {
    name: "Erlich Bachman",
    url: "/images/author.png",
  },
  {
    name: "Monica Hall",
    url: "/images/author.png",
  },
  {
    name: "Jared Dunn",
    url: "/images/author.png",
  },
  {
    name: "Dinesh Chugtai",
    url: "/images/author.png",
  },
];

const Match = () => {
  return (
    <>
      <ContractorsLayoutBase>
        <div className="dashboard">
          <Advertise></Advertise>
          <SwipeCards characters={db}></SwipeCards>
        </div>
      </ContractorsLayoutBase>
    </>
  );
};
export default Match;
