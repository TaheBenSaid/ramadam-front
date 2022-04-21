import React from "react";
import Suggestion from "./Suggestion";
import spagetti from "./../../assets/imgs/spagetti.svg";
import soup from "./../../assets/imgs/soup.svg";
import potato from "./../../assets/imgs/potato.svg";

const AllSuggestions = () => {
  return (
    <>
      <div className="sugg-title">Today suggestions</div>
      <div className="Suggestions">
        <Suggestion
          pic={spagetti}
          name={"Spagetti"}
          ingredients={"Spaghetti, Tomatoe Paste and Chicken."}
          duration={"1h 30min"}
        />
        <Suggestion
          pic={soup}
          name={"Soup"}
          ingredients={"Bird Tongue, Garlic, Onion and Tomatoe Paste."}
          duration={"40min"}
        />
        <Suggestion
          pic={potato}
          name={"French Fries"}
          ingredients={"Potatoe and Salt."}
          duration={"30min"}
        />
      </div>
    </>
  );
};

export default AllSuggestions;
