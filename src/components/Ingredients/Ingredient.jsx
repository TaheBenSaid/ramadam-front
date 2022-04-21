import React from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { setDish } from "../../store/slices/dishSlice";
const Ingredient = ({ pic, name }) => {
  const dispatch=useDispatch();
  const clickHandle = async () => {
    const today=new Date();
    const day=today.getDate();
    let url = `https://ramadan-dishes-si-tahe.herokuapp.com/cooktime?day=${
      day
    }&ingredients=${name}`;
  

    await axios.get(url).then((res) => dispatch(setDish(res.data.data)));
  };
  return (
    <div onClick={()=>clickHandle()}>
      <img src={pic} alt={name} className="ing-pic"/>
      <h4 className="ingredient-name">{name}</h4>
    </div>
  );
};

export default Ingredient;
