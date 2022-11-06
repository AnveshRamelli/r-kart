const { combineReducers } = require("redux");
const { CartReducer } = require("./CartReducer");
const { FavouritesReducer } = require("./FavouritesReducer");
const { ProductReducer } = require("./ProductReducer");

const reducers = combineReducers({
  allProducts: ProductReducer,
  cart: CartReducer,
  favourites: FavouritesReducer,
});

export default reducers;
