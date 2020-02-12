import React from "react";
import hotel from "./hotel.png";
import "../styles/styles.css";

const Header = () => {
  return (
    <header className="Header">
      <img src={hotel} className="logo" alt="logo" />
    </header>
  );
};

export default Header;
