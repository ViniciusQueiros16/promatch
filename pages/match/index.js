import React, { useState } from "react";
import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import dynamic from "next/dynamic";

const characters = [
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
  const [lastDirection, setLastDirection] = useState();

  const SwipeCard = dynamic(() => import("react-tinder-card"), {
    ssr: false,
  });

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <ContractorsLayoutBase>
      <div className="dashboard">
        {/* <ChatContainer user={user} /> */}
        <div className="swipe-container">
          <div className="card-container">
            {SwipeCard &&
              characters.map((character) => (
                <SwipeCard
                  className="swipe"
                  key={character.name}
                  onSwipe={(dir) => swiped(dir, character.name)}
                  onCardLeftScreen={() => outOfFrame(character.name)}
                >
                  <div
                    style={{ backgroundImage: `url(${character.url})` }}
                    className="card"
                  >
                    {/* <h3>{character.name}</h3> */}
                  </div>
                </SwipeCard>
              ))}
            <div className="swipe-info">
              {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
            </div>
          </div>
        </div>
      </div>
    </ContractorsLayoutBase>
  );
};

export default Match;
