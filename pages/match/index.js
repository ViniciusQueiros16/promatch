import ContractorsLayoutBase from "@layouts/ContractorsLayoutBase";
import { Button } from "@mui/material";
// import dynamic from "next/dynamic";
import React, { useMemo, useRef, useState } from "react";
import TinderCard from "react-tinder-card";

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
  // const SwipeCard = dynamic(() => import("react-tinder-card"), {
  //   ssr: false,
  // });

  const [currentIndex, setCurrentIndex] = useState(characters.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(characters.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < characters.length - 1;

  const canSwipe = currentIndex >= 0;

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < characters.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };
  return (
    <>
      <ContractorsLayoutBase>
        <div className="dashboard">
          {/* <ChatContainer user={user}/> */}
          <div className="swipe-container">
            <div className="card-container">
              {TinderCard &&
                characters.map((character, index) => (
                  <TinderCard
                    ref={childRefs[index]}
                    className="swipe"
                    key={character.name}
                    onSwipe={(dir) => swiped(dir, character.name, index)}
                    onCardLeftScreen={() => outOfFrame(character.name, index)}
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
            <div className="buttons">
              <Button
                style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                onClick={() => swipe("left")}
              >
                Swipe left!
              </Button>
              <Button
                style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
                onClick={() => goBack()}
              >
                Undo swipe!
              </Button>
              <Button
                style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
                onClick={() => swipe("right")}
              >
                Swipe right!
              </Button>
            </div>
          </div>
        </div>
      </ContractorsLayoutBase>
    </>
  );
};
export default Match;
