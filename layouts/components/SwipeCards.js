import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@mui/material";

const SwipeCards = ({ characters }) => {
  const [TinderCard, setTinderCard] = useState(null);

  useEffect(() => {
    // Dynamic import of TinderCard when the component mounts on the client side
    import("react-tinder-card").then((module) => {
      setTinderCard(module.default);
    });
  }, []);
  const [currentIndex, setCurrentIndex] = useState(characters.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [isCardLoaded, setIsCardLoaded] = useState(false);
  useEffect(() => {
    // This hook will run once the SwipeCard component is loaded
    setIsCardLoaded(true);
  }, []);
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
      <div className="dashboard">
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
              disabled={!isCardLoaded} // Disable the button if SwipeCard is not loaded
            >
              Swipe left!
            </Button>
            <Button
              style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
              onClick={() => goBack()}
              disabled={!isCardLoaded} // Disable the button if SwipeCard is not loaded
            >
              Undo swipe!
            </Button>
            <Button
              style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
              onClick={() => swipe("right")}
              disabled={!isCardLoaded} // Disable the button if SwipeCard is not loaded
            >
              Swipe right!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwipeCards;
