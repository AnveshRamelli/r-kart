import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removefromCart } from "../Redux/Actions";
import "../Styles/Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartProducts);
  const dispatch = useDispatch();
  const renderCartProducts = cart.map((item) => {

    const quantity = item.quantity > 0 ? item.quantity : dispatch(removefromCart(item.id))

    return (
      <div className="card-cart" key={item.id}>
        <img src={item.image}></img>
        <h4>{item.title}</h4>
        <div className="button-container">
          <button onClick={()=> dispatch(increaseQuantity(item.id))}>+</button>
          <p>{quantity}</p>
          <button onClick={()=> dispatch(decreaseQuantity(item.id))}>-</button>
        </div>
        <button className="remove-btn" onClick={()=> dispatch(removefromCart(item.id))}>X</button>
        <p>${item.price * item.quantity}</p>
      </div>
    );
  });
  return <div className="cart-container">{renderCartProducts}</div>;
};

export default Cart;
