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
                <div className="card">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage: `url(${character.url})`,
                    }}
                  ></div>
                  <div className="card-content">
                    <h3 className="card-title">{character.name}</h3>
                    <p className="card-subtitle">{character.type_service}</p>
                    <p className="card-description">{character.description}</p>
                  </div>
                </div>
              </TinderCard>
            ))}
        </div>
        {/* <div className="swipe-info">
          {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
        </div> */}
        <div className="button-container">
          <Button
            className="btn btn-primary"
            onClick={() => swipe("left")}
            disabled={!isCardLoaded}
          >
            Swipe left!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={() => goBack()}
            disabled={!isCardLoaded}
          >
            Undo swipe!
          </Button>
          <Button
            className="btn btn-primary"
            onClick={() => swipe("right")}
            disabled={!isCardLoaded}
          >
            Swipe right!
          </Button>
        </div>
      </div>
    </>
  );
};

export default SwipeCards;
