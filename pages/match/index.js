import React, { useState,useEffect } from "react";

import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";

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

let TinderCard;

const Match = () => {
  const [lastDirection, setLastDirection] = useState();

  useEffect(() => {
    // Dynamically import react-tinder-card when component mounts
    import("react-tinder-card").then((module) => {
      TinderCard = module.default;
    });
  }, []);

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
            {TinderCard &&
              characters.map((character) => (
                <TinderCard
                  className="swipe"
                  key={character.name}
                  onSwipe={(dir) => swiped(dir, character.name)}
                  onCardLeftScreen={() => outOfFrame(character.name)}
                >
                  <div
                    style={{ backgroundImage: `url(${character.url})` }}
                    className="card"
                  >
                    <h3>{character.name}</h3>
                  </div>
                </TinderCard>
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
