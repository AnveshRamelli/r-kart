const initialState = {
  cartProducts: [],
};
export const CartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      for (let i of state.cartProducts) {
        if (i.id === payload.id) {
          return state;
        }
      }
      return { ...state, cartProducts: [...state.cartProducts, payload] };

    case "REMOVE_FROM_CART":
        return {...state, cartProducts:state.cartProducts.filter((item) => item.id !== payload)}

    case "INC_QUANTITY":
        return {...state, cartProducts:state.cartProducts.map(item => item.id === payload ? {...item,quantity:item.quantity+1} : item)}
    
    case "DEC_QUANTITY":
        return {...state, cartProducts:state.cartProducts.map(item => item.id === payload ? {...item,quantity:item.quantity-1} : item)}
    
    default:
      return state;
  }
};
