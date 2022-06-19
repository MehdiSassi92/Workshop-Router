import React from "react";

export const Rate = ({ rating, setRateSearching }) => {
  const starArray = [];
  const starsRate = (x) => {
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span key={i} onClick={() => setRateSearching(i)}>
            ★
          </span>
        );
      } else {
        starArray.push(
          <span key={i} onClick={() => setRateSearching(i)}>
            ☆
          </span>
        );
      }
    }
    return starArray;
  };
  return (
    <div>
      <div className="etoile">{starsRate(rating)}</div>
    </div>
  );
};
