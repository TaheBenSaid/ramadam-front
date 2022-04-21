import React from "react";
import logo from "./../../assets/imgs/logo.svg";

const Header = () => {
  return (
    <>
      <div className="title">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="page-title">Ramadan Dishes</h1>
      </div>
    </>
  );
};

export default Header;
