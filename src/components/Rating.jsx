import React from "react";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";

function addStars(value) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    i <= value
      ? stars.push(
          <span key={i.toString()}>
            <RiStarSFill />
          </span>
        )
      : stars.push(
          <span key={i.toString()}>
            <RiStarSLine />
          </span>
        );
  }
  return stars;
}

const Rating = ({ value }) => {
  return (
    <span className="text-lg flex text-yellow-500">{addStars(value)}</span>
  );
};

export default Rating;
