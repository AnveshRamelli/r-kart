import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addtoCart } from "../Redux/Actions";
import "../Styles/ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch()

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) =>
        setProduct({ ...json, quantity: 10, isFavourite: false })
      );
  }, [productId]);

  const toggleFavourite = () => {
    setProduct((product) => {
      return {
        ...product,
        isFavourite: !product.isFavourite,
      };
    });
  };
//   const setFavourite = product.isFavourite ? `&#9829`; : &#9825;

  return (
    <div className="single-product">
      <div>
        <img src={product.image}></img>
        {/* {product.isFavourite ? <span>&#9829</span> : } */}
        <span>&#9829;</span>
        <button onClick={()=>dispatch(addtoCart({...product,quantity:1}))}>Add to Cart</button>
      </div>
      <div>
        <h2>{product.title}</h2>
        <h3>{product.category}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
