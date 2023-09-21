import React from "react";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import SwipeCards from "@layouts/components/SwipeCards";

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
        <SwipeCards characters={db}></SwipeCards>
      </ContractorsLayoutBase>
    </>
  );
};
export default Match;
