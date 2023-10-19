import React, { useState } from "react";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import { Pagination } from "@mui/material";
import LikesDisplay from "@layouts/components/LikesDisplay";
import Highlights from "@layouts/components/Highlights";
import UserHeader from "@layouts/components/UserHeader";

const likesSend = [
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
  {
    name: "Dinesh Chugtai",
    type_service: "Service Type 5",
    description:
      "Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.Lorem ipsum dolor sit amet, conse tfctetur adipiscing elit. Vel in in donec iaculis tempasus odio nunc laoreet . Libero ullam rgscorper.",
    url: "/images/author.png",
  },
];

const likes = [
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
];

const MatchContainer = () => {
  const [clickedUser, setClickedUser] = useState(false);

  return (
    <ContractorsLayoutBase>
      <div className="flex flex-row justify-center gap-x-4 ">
        <div className="like-container">
          <UserHeader />

          {/* Tabs */}
          <div className="flex">
            <button
              className={`h-8 flex-1 text-sm hover:bg-yellow-400 ${
                clickedUser ? "bg-yellow-200 text-black" : ""
              }`}
              onClick={() => setClickedUser(true)}
            >
              Likes
            </button>
            <button
              className={`h-8 flex-1 text-sm hover:bg-yellow-400 ${
                !clickedUser ? "bg-yellow-200 text-black" : ""
              }`}
              onClick={() => setClickedUser(false)}
            >
              Likes Sent
            </button>
          </div>

          {!clickedUser && (
            <LikesDisplay cards={likesSend} setClickedUser={setClickedUser} />
          )}

          {clickedUser && (
            <LikesDisplay cards={likes} setClickedUser={setClickedUser} />
          )}

          <Pagination
            count={3}
            variant="outlined"
            color="primary"
            className="mb-4 flex items-center justify-center"
          />
        </div>
        <Highlights />
      </div>
    </ContractorsLayoutBase>
  );
};

export default MatchContainer;
