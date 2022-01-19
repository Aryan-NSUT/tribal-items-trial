import React from "react";
import classes from "./ItemInfoForm.module.css";
import Input from "../../UI/Input/Input";
const ItemInfoForm = (props) => {
  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
          id: 'amount',
          type: 'number',
          min: '0',
          max: '5',
          step: '1',
          defaultValue:'0'
      }} />
      <button>+ Add</button>
    </form>
  );
};

export default ItemInfoForm;
