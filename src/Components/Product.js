import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Styles/Product.css"

const Product = () => {
  const products = useSelector((state) => state.allProducts.allProducts);

  const renderAllProducts = products.map((item) => {
    return (
        <div className="card" key={item.id}>
        <Link to ={`product/${item.id}`}><img src={item.image} alt=""></img></Link>
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
    );
  });
  return <div className="card-container">{renderAllProducts}</div>;
};

export default Product;
