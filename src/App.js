import React,{useState} from "react";
import Header from "./components/Layout/Header/Header";
import Items from "./components/Items/Items/Items";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown,setcartIsShown]=useState(false);
  const cartIsShownHandler = () =>{
    setcartIsShown(true);
  }

  const cartIsHiddenHandler = () =>{
    setcartIsShown(false);
  }

  return (
    <React.Fragment>
      {cartIsShown && <Cart onClickClose={cartIsHiddenHandler}/>}
      <Header onClickShow={cartIsShownHandler}/>
      <main>
        <Items />
      </main>
    </React.Fragment>
  );
}

export default App;
