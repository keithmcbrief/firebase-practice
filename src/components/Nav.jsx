import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png"

const Nav = () => {
  return (
    <div className="nav">
      <FontAwesomeIcon icon="bars" />
      <img className="logo" src={Logo}></img>
    </div>
  );
};

export default Nav;
