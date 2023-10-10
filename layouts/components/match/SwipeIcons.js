import React, { useState } from "react";
import ImageFallback from "../ImageFallback";
import { Star, StarBorderOutlined } from "@mui/icons-material";
import { BsLightning, BsLightningFill } from "react-icons/bs";

const SwipeIcons = () => {
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
        <ImageFallback
          src={liked ? "/images/iconLikeFill.png" : "/images/iconLike.png"}
          alt={liked ? "Icon Like Fill" : "Icon Like"}
          width={32}
          height={32}
        />
      </button>

      <button
        className={`botao-like ${star ? "star" : ""}`}
        onClick={handleStar}
      >
        {star ? (
          <Star className="star-icon text-4xl text-amber-500" />
        ) : (
          <StarBorderOutlined className="star-icon text-4xl text-amber-500" />
        )}
      </button>

      <button className={`botao-like ${ray ? "ray" : ""}`} onClick={handleRay}>
        {ray ? (
          <BsLightningFill className="ray-icon text-2xl text-violet-700" />
        ) : (
          <BsLightning className="ray-icon text-2xl text-violet-700" />
        )}
      </button>
    </div>
  );
};

export default SwipeIcons;
