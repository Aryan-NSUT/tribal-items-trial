import React from "react";
import classes from "./Header.module.css";
import villageImage from "../../../Assets/village.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Tribal Buy</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes["main-image"]}>
        <img src={villageImage} alt="Traditional villages from Uttrakhand" />
      </div>
    </React.Fragment>
  );
};
export default Header;
