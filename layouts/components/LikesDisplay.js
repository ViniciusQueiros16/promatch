import React from "react";
import SwipeIcons from "./match/SwipeIcons";

function LikesDisplay({ cards }) {
  return (
    <div className="row m-4 ">
      {cards.map((card, index) => (
        <div key={index} className="mt-2 lg:col-6">
          <div className="card-like">
            <div
              className="card-image-like"
              style={{
                backgroundImage: `url(${card.url})`,
              }}
            ></div>
            <div className="card-content-like">
              <h3 className="card-title-like">{card.name}</h3>
              <div className="swipe-icons-container">
                <SwipeIcons />
              </div>
              <p className="card-subtitle-like">{card.type_service}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LikesDisplay;
