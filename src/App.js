import React from "react";
import Header from "./components/Layout/Header/Header";
import Items from "./components/Items/Items/Items";
function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Items />
      </main>
    </React.Fragment>
  );
}

export default App;
