import React, { useState } from "react";
import ImageFallback from "../ImageFallback";
import {
  SpokeTwoTone,
  Star,
  StarBorderOutlined,
  Thunderstorm,
} from "@mui/icons-material";
import { BsLightning, BsLightningFill } from "react-icons/bs";

function SwipeIcons() {
  const [liked, setLiked] = useState(false);
  const [star, setStar] = useState(false);
  const [ray, setRay] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleStar = () => {
    setStar(!star);
  };

  const handleRay = () => {
    setRay(!ray);
  };

  return (
    <div className="swipe-icons-container">
      <button
        className={`botao-like ${liked ? "liked" : ""}`}
        onClick={handleLike}
      >
        {liked ? (
          <ImageFallback
            src={"/images/iconLike.png"}
            alt="Icon Like"
            width={32}
            height={32}
          />
        ) : (
          <ImageFallback
            src={"/images/iconLikeFill.png"}
            alt="Icon Like Fill"
            width={32}
            height={32}
          />
        )}
      </button>

      <button
        className={`botao-like ${star ? "star" : ""}`}
        onClick={handleStar}
      >
        {star ? (
          <StarBorderOutlined className="star-icon text-4xl text-amber-500" />
        ) : (
          <Star className="star-icon text-4xl text-amber-500" />
        )}
      </button>

      <button
        className={`botao-like ${star ? "star" : ""}`}
        onClick={handleRay}
      >
        {ray ? (
          <BsLightning className="star-icon text-2xl text-violet-700" />
        ) : (
          <BsLightningFill className="star-icon text-2xl text-violet-700" />
        )}
      </button>
    </div>
  );
}

export default SwipeIcons;
