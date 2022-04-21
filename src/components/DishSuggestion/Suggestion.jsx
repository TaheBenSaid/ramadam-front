import React from "react";
import clock from "./../../assets/imgs/clock.svg";

const Suggestion = ({ pic, name, ingredients, duration }) => {
  console.log(ingredients);
  return (
    <div className="suggestion">
      <img src={pic} alt={name} className="dish-pic" />
      <h4 className="dish-name">{name}</h4>
      <p className="ingredients">{ingredients}</p>
      <div className="duration-wrapper">
        <img src={clock} alt="clock" className="clock" />
        <h6 className="duration">{duration}</h6>
      </div>
    </div>
  );
};

export default Suggestion;
