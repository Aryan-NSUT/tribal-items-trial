import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../Store/Cart-Context";
import { useContext } from "react/cjs/react.development";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.lenght > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    const cartItem = {...item,amount:1}
    cartCtx.addItem(cartItem);
  };
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      id={item.id}
      price={item.price}
      onAdd={cartItemAddHandler.bind(null, item)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
    />
  ));

  return (
    <Modal onClickClose={props.onClickClose}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClickClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
