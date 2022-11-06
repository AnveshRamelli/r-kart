import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector(state => state.cart.cartProducts)
  return (
    <header>
      <Link to="/"><h1>R-Kart</h1></Link>
      <input type="search"></input>
      {/* <span>&#9825;</span> */}
      {/* &#9829; */}
      <Link to="/Favourites"><p>Favourites</p></Link>
      <Link to="/Cart"><span>&#128722;</span><span>({cart.length})</span></Link>
    </header>
  );
};

export default Header;
