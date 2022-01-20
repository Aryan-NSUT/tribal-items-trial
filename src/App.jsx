import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Items from "./components/Items/Items/Items";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";
function App() {
  const [cartIsShown, setcartIsShown] = useState(false);
  const cartIsShownHandler = () => {
    setcartIsShown(true);
  };

  const cartIsHiddenHandler = () => {
    setcartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClickClose={cartIsHiddenHandler} />}
      <Header onClickShow={cartIsShownHandler} />
      <main>
        <Items />
      </main>
    </CartProvider>
  );
}

export default App;
