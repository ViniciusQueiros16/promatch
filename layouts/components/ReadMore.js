import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const displayText = isReadMore ? text.slice(0, 150) : text;

  return (
    <div>
      {text.length > 150 ? (
        <p className="text-read-more">
          {displayText}
          <span onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...read more" : " show less"}
          </span>
        </p>
      ) : (
        <p className="text">{text}</p>
      )}
    </div>
  );
};

export default ReadMore;
