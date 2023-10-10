import React, { useContext, useEffect, useState } from "react";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import { Avatar, Pagination } from "@mui/material";
import { SessionContext } from "context/SessionContext";
import LikesDisplay from "@layouts/components/LikesDisplay";
import Highlights from "@layouts/components/Highlights";

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
  const session = useContext(SessionContext);
  console.log(session);
  const [clickedUser, setClickedUser] = useState(false);
  const [speed, setSpeed] = useState();

  useEffect(() => {
    setSpeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <ContractorsLayoutBase>
      <div className="flex flex-row justify-center gap-x-4 ">
        <div className="like-container">
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
