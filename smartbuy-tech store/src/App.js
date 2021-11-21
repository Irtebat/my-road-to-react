import React, { useState } from "react";

import Header from "./Components/Layout/Header";
import Items from "./Components/Items/Items";
import Cart from "./Components/Cart/Cart";
import "./App.css";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}></Header>
      <Items></Items>
    </CartProvider>
  );
}

export default App;
