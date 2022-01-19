import React from "react";
import classes from "./Items.module.css";
import ItemSummary from "../Item Summary/ItemSummary";
import AvailableItems from "../Available Items/AvailableItems";
const Items = (props) => {
  return (
    <React.Fragment>
      <ItemSummary />
      <AvailableItems />
    </React.Fragment>
  );
};

export default Items;
