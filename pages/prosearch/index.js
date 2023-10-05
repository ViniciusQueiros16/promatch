import React from "react";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import SwipeCards from "@layouts/components/match/SwipeCards";
import Advertise from "@layouts/components/match/Advertise";

const db = [
  {
    name: "Richard Hendricks",
    type_service: "Service Type 1",
    description:
      "Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.",
    url: "/images/author.png",
  },
  {
    name: "Erlich Bachman",
    type_service: "Service Type 2",
    description:
      "Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet .Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet .",
    url: "/images/author.png",
  },
  {
    name: "Monica Hall",
    type_service: "Service Type 3",
    description: "Description for Service Type 3",
    url: "/images/author.png",
  },
  {
    name: "Jared Dunn",
    type_service: "Service Type 4",
    description: "Description for Service Type 4",
    url: "/images/author.png",
  },
  {
    name: "Dinesh Chugtai",
    type_service: "Service Type 5",
    description:
      "Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.",
    url: "/images/author.png",
  },
];

const ProSearch = () => {
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
export default ProSearch;
