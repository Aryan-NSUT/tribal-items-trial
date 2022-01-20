import React from "react";
import Header from "./components/Layout/Header/Header";
import Items from "./components/Items/Items/Items";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Items />
      </main>
    </React.Fragment>
  );
}

export default App;
