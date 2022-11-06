import React, { useEffect } from "react";
import { setProducts } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";

const ProductListing = () => {
  const API = "https://fakestoreapi.com/products";

  const dispatch = useDispatch();

  const fetchProducts = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => dispatch(setProducts(json)));
  };

  useEffect(() => {
    fetchProducts(API);
  }, []);

  return <><Product /></>;
};

export default ProductListing;
