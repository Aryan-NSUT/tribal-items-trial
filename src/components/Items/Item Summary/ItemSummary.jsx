import React from "react";
import classes from "./ItemSummary.module.css";

const ItemSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      All our meals are cooked with high-quality ingredients, just-in-time and
      of course by experienced chefs!
    </section>
  );
};
export default ItemSummary;
