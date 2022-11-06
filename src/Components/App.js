import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Favourites from "./Favourites";
import Header from "./Header";
import ProductDetails from "./ProductDetails";
import ProductListing from "./ProductListing";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route path="Product/:productId" element={<ProductDetails />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Favourites" element={<Favourites />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
