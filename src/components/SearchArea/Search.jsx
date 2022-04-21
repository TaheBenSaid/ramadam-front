import React, { useEffect, useState } from "react";
import search from "./../../assets/imgs/Search.svg";
import calendar from "./../../assets/imgs/calendar.svg";
import down from "./../../assets/imgs/down.svg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDish } from "../../store/slices/dishSlice";
const Search = () => {
  const dispatch = useDispatch();
  const [day, setDay] = useState(null);
  const [ingredient, setIngredient] = useState(null);

  const clickHandle = async () => {
    console.log(day);
    if (!day || !ingredient) {
      alert("Fill date and ingredient");
      return;
    }
    console.log(day.split("-")[2], ingredient);
    let url = `https://ramadan-dishes-si-tahe.herokuapp.com/cooktime?day=${
      day.split("-")[2]
    }&ingredients=${ingredient}`;
    console.log(url);

    await axios.get(url).then((res) => dispatch(setDish(res.data.data)));
  };
  useEffect(() => {
    var today = new Date();
    document.getElementById("date").value =
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2);
  }, []);

  return (
    <>
      <div className="search-area">
        <div className="search-label">
          <img src={search} alt="search-icon" className="search-icon" />
          <input
            type="text"
            className="search-p"
            placeholder="Search by ingredient"
            onChange={(e) => setIngredient(e.target.value)}
          />
        </div>
        <div className="calendar">
          <input
            type="date"
            className="date-picker"
            id="date"
            onChange={(e) => setDay(e.target.value)}
          />
          <img src={calendar} alt="calendar" className="calendar-icon" />
          <img src={down} alt="arrow-down" className="arrow-down" />
        </div>
        <button className="search-btn" onClick={() => clickHandle()}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
