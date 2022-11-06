export const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};

export const addtoCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export const removefromCart = (productId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productId,
  };
};

export const increaseQuantity = (productId) => {
  return {
    type: "INC_QUANTITY",
    payload: productId,
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: "DEC_QUANTITY",
    payload: productId,
  };
};
