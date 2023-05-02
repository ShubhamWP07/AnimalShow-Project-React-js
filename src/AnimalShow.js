import React, { useState } from "react";
import bird from "../src/svg/bird.svg";
import cat from "../src/svg/cat.svg";
import cow from "../src/svg/cow.svg";
import dog from "../src/svg/dog.svg";
import gator from "../src/svg/gator.svg";
import horse from "../src/svg/horse.svg";
import heart from "../src/svg/heart.svg";
import "./AnimalShow.css";

// crating an object for animals svg
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div onClick={handleClick} className="animalshow-section">
      <img alt="animals" src={svgMap[type]} className="animals-img" />
      <img
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * click + "px", maxWidth: "50px" }}
        className="heart"
      />
    </div>
  );
};

export default AnimalShow;
