import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import tomato from "./../../assets/imgs/tomato.svg";
import carrot from "./../../assets/imgs/carrot.svg";
import onion from "./../../assets/imgs/onion.svg";
import rice from "./../../assets/imgs/rice.svg";
import parsley from "./../../assets/imgs/parsley.svg";
import tuna from "./../../assets/imgs/tuna.svg";
import { useSelector } from "react-redux";
import Suggestion from "../DishSuggestion/Suggestion";
import spagetti from "../../assets/imgs/spagetti.svg";
import axios from "axios";

const AllIngredients = () => {
  const API_URL = "https://ramadan-dishes-si-tahe.herokuapp.com";
  const { dishes } = useSelector((state) => state.dishReducer);
  const [ingredients, setIngredients] = useState(null);
  console.log(dishes);
  useEffect(() => {
    axios
      .get(`${API_URL}/ingredients`)
      .then((res) => setIngredients(res.data.ingredients));
  }, []);
  console.log(ingredients);
  return (
    <>
      {dishes !== null ? (
        <div className="Suggestions-cont">
          <h1 className="dish-title">
            Carrot recipes suggestions for the 30th of March, 2022
          </h1>
          <div className="dishes-result">
            {dishes.map((dish) => {
              let duration;
              if (dish.duration > 60) {
                duration = `${Math.floor(dish.duration / 60)}h ${
                  dish.duration % 60
                }min`;
              } else {
                duration = `${Math.floor(dish.duration / 60)}h ${
                  dish.duration % 60
                }min`.split(" ")[1];
              }

              return (
                <Suggestion
                  pic={spagetti}
                  name={dish.name}
                  ingredients={`${dish.ingredients}`}
                  // duration={`${dish.duration}min`}
                  duration={duration}
                />
              );
            })}
          </div>
        </div>
      ) : (
        // alert("Alert")
        <div>
          <div className="ing-title">Ingredient suggestions</div>
          <div className="dish-ingredients">
            {ingredients &&
              ingredients?.map((el) => {
                return <Ingredient pic={tomato} name={el} />;
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default AllIngredients;
