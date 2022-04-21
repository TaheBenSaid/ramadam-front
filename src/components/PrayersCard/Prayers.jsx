import axios from "axios";
import React, { useEffect, useState } from "react";
const { differenceInMinutes } = require("date-fns");

const Prayers = () => {
  const getTimeAMPMFormat = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? "0" + hours : hours;
    // appending zero in the start if hours less than 10
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };
  const currentTime = getTimeAMPMFormat(new Date());

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const currentDate = new Date(date).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;

  const [prayers, setPrayers] = useState([]);
  const API_URL = `https://api.aladhan.com/v1/calendar?latitude=35.829300&longitude=10.640630&method=2&month=${currentMonth}&year=${currentYear}`;
  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data.data);

        setPrayers(filterDate(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const filterDate = (res) => {
    const data = res.find((day) => day.date.readable == "19 Apr 2022");
    const timings = [data.timings];
    return timings;
  };
  useEffect(() => {}, [prayers[0]]);

  console.log({ prayers });

  if (prayers.length > 0) {
    const { Fajr, Sunrise, Dhuhr, Asr, Maghrib, Isha } = prayers[0];
    
    console.log("prayerchanged");

    console.log({ prayers });
    var time = today.getHours() + ":" + today.getMinutes();
    console.log("time now:", time);

    console.log({ currentTime });
    console.log(Maghrib);

    let NextPrayer;
    let NextPrayerName;
    let NextPrayerTime;
    if (time > Isha.split(" ")[0] && time > Fajr.split(" ")[0]) {
      NextPrayer = Fajr.split(" ")[0];
      NextPrayerTime = Fajr;
      NextPrayerName = "Fajr";
    } else if (time > Fajr.split(" ")[0] && time < Dhuhr.split(" ")[0]) {
      NextPrayer = Dhuhr.split(" ")[0];
      NextPrayerTime = Dhuhr;
      NextPrayerName = "Dhuhr";
    } else if (time > Dhuhr.split(" ")[0] && time < Asr.split(" ")[0]) {
      NextPrayer = Asr.split(" ")[0];
      NextPrayerTime = Asr;
      NextPrayerName = "Asr";
    } else if (time > Asr.split(" ")[0] && time < Maghrib.split(" ")[0]) {
      NextPrayer = Maghrib.split(" ")[0];
      NextPrayerTime = Maghrib;
      NextPrayerName = "Maghrib";
    } else if (time > Maghrib.split(" ")[0] && time < Isha.split(" ")[0]) {
      NextPrayer = Isha.split(" ")[0];
      NextPrayerTime = Isha;
      NextPrayerName = "Isha";
    }

    console.log(`next prayer is`, NextPrayerName, NextPrayer, NextPrayerTime);
    console.log(time);
    const timeLeft = differenceInMinutes(
      new Date(
        0,
        0,
        0,
        Number(NextPrayer.split(":")[0]),
        Number(NextPrayer.split(":")[1].split(" ")[0])
      ),
      new Date(0, 0, 0, time.split(":")[0], time.split(":")[1])
    );
    let left;
    if (timeLeft > 60) {
      left = `${Math.floor(timeLeft / 60)}h ${timeLeft % 60} `;
    } else {
      left = `${Math.floor(timeLeft / 60)}h ${timeLeft % 60} `.split(" ")[1];
    }

    return (
      <div className="Prayers-card">
        <div className="current-time">
          <h1> {currentTime}</h1>
        </div>
        <div className="current-date">
          <h1>{currentDate}</h1>
        </div>
        <div className="next-prayer">
          <h2 className="next-p">Next prayer</h2>
          <h2 className="next-prayer-time">{NextPrayer}</h2>
          <div className="time-left">{`${left} mins left until ${NextPrayerName} `}</div>
        </div>
        <div className="prayers-list">
          <ul>
            <li>
              <span className="salat">Fajr</span>
              <span className="salat-time">{Fajr.split(" ")[0]}</span>
            </li>
            <li>
              <span className="salat">Shuruq</span>
              <span className="salat-time">{Sunrise.split(" ")[0]}</span>
            </li>
            <li>
              <span className="salat">Dhuhr</span>
              <span className="salat-time">{Dhuhr.split(" ")[0]}</span>
            </li>
            <li className="active">
              <span className="salat">Asr</span>
              <span className="salat-time">{Asr.split(" ")[0]}</span>
            </li>
            <li>
              <span className="salat">Maghrib</span>
              <span className="salat-time">{Maghrib.split(" ")[0]}</span>
            </li>
            <li>
              <span className="salat">Isha</span>
              <span className="salat-time">{Isha.split(" ")[0]}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Prayers;
